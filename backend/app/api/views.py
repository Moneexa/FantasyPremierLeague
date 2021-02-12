from django.db.models import Prefetch
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.generics import CreateAPIView
import asyncio
from tasks.league import generate_sub_leagues
from api.constants import MAX_ENTRIES_PER_TEAM, league_periods

from .utils import user_sync, sync_user_gameweek
from .models import FPLUser, League, Team, TeamLeague, Prize, GameweekHistory
from .serializers import (
    FPLUserSerializer,
    FPLTokenObtainPairSerializer,
    RegisterSerializer,
    LeagueSerializer,
    TeamSerializer,
    TeamLeagueSerializer,
    GameweekHistorySerializer,
    TeamLeagueWithTeamsSerializer,
)


class FPLTokenObtainPair(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = FPLTokenObtainPairSerializer


class RegisterView(CreateAPIView):
    queryset = FPLUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class FPLUserViewSet(viewsets.ModelViewSet):
    queryset = FPLUser.objects.all()
    serializer_class = FPLUserSerializer
    # permission_classes = (IsAuthenticated,)

    @action(methods=["POST"], detail=False)
    def authorize(self, request):
        if self.request.user == "AnonymousUser":
            return Response({"error": "Please log in first"}, status.HTTP_403_FORBIDDEN)
        username, password = request.data["username"], request.data["password"]
        result = asyncio.run(user_sync(self, email=username, password=password))
        # result = asyncio.run(sync_user_gameweek(self, 7765382))
        return Response(result.data, result.status_code)

    @action(methods=["POST"], detail=False)
    def celery(self, request):
        task = generate_sub_leagues()
        return Response({"task_id": "ok"}, status=201)

    @action(methods=["GET"], detail=False)
    def my_leagues(self, request):
        user = self.request.user
        team = Team.objects.get(user=user)
        tls = team.league.through.objects.filter(team_id=team.user_id)
        print(tls)
        serializer = TeamLeagueSerializer(tls, many=True)
        return Response(data=serializer.data)

    @action(methods=["GET"], detail=False)
    def get_mayhem(self, request):
        user = self.request.user
        team = Team.objects.get(user=user)
        tls = team.league.through.objects.filter(
            league_id=request.GET.get("league_id", None)
        )
        serializer = TeamLeagueWithTeamsSerializer(tls, many=True)
        data = sorted(serializer.data, key=lambda x: x["overall_rank"])
        return Response(data=data)

    @action(methods=["GET"], detail=False)
    def get_gameweekhistory(self, request):
        history = GameweekHistory.objects.filter(user_id=self.request.user.id)
        serializer = GameweekHistorySerializer(history, many=True)
        return Response(data=serializer.data)


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    # permission_classes = (IsAuthenticated,)

    @action(
        methods=["POST"], detail=False, url_path="join_league/(?P<league_pk>[^/.]+)"
    )
    def join_league(self, request, pk=None, league_pk=None):
        team = Team.objects.get(user_id=self.request.user.id)
        league = League.objects.get(pk=self.kwargs["league_pk"])
        league_entries = team.league.filter(period=league.value).count()
        if league_entries < MAX_ENTRIES_PER_TEAM:
            TeamLeague.objects.create(team=team, league=league)
            return Response({"status": "ok"}, status=status.HTTP_201_CREATED)

        return Response(
            {"error_message": "Too many league entries for your team!"},
            status=status.HTTP_400_BAD_REQUEST,
        )


class LeagueViewSet(viewsets.ModelViewSet):
    queryset = League.objects.prefetch_related(
        Prefetch("prize", queryset=Prize.objects.order_by("-value"))
    )
    serializer_class = LeagueSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        if "period" in self.request.query_params:
            league_type = self.request.query_params["period"]
            leagues = qs.filter(period=league_periods[league_type])
            return leagues

        return qs
