from django.shortcuts import get_object_or_404
from fpl import FPL
from api.models import FPLUser
from fpl.utils import team_converter
import aiohttp
from .serializers import PlayerSerializer, TeamSerializer, FPLUserSerializer
from .models import Team, GameweekHistory
from rest_framework.response import Response
from rest_framework import status
from asgiref.sync import sync_to_async


async def retrieve_player(player_id):
    session = aiohttp.ClientSession()
    fpl = FPL(session)
    player = await fpl.get_player(player_id, return_json=True)
    return Response(player)


@sync_to_async()
def save_players(players):
    for player in players:
        p = PlayerSerializer(
            data={
                "id": player.id,
                "firstname": player.first_name,
                "lastname": player.second_name,
                "league_team_name": team_converter(player.team),
            }
        )
        p.is_valid(raise_exception=True)
        p.save()

    return {"saving": "done"}


@sync_to_async()
def sync_single_user(id, user):
    data = {
        "id": id,
        "fpl_user_id": user.id,
        "fpl_overall_rank": user.summary_overall_rank,
    }
    user = FPLUser.objects.get(pk=id)
    user = FPLUserSerializer(user, data=data, partial=True)
    user.is_valid(raise_exception=True)
    user.save()

    return Response({"data": "User sync done"})


@sync_to_async()
def sync_single_team(id, players, user_team_name):
    try:
        team = Team.objects.get(pk=id)
    except Team.DoesNotExist:
        data = {
            "team_name": user_team_name,
            "user": id,
            "players": [p["element"] for p in players],
            "team_captain": next(p for p in players if p["is_captain"] == True)[
                "element"
            ],
            "vice_captain": next(p for p in players if p["is_vice_captain"] == True)[
                "element"
            ],
        }
        t = TeamSerializer(data=data)
        t.is_valid(raise_exception=True)
        t.save()

    return Response({"data": "Team sync finished"}, status.HTTP_201_CREATED)


async def sync_players():
    session = aiohttp.ClientSession()
    fpl = FPL(session)
    players = await fpl.get_players()
    await save_players(players)
    await session.close()

    return Response({"data": "LUX"})


async def user_sync(self, email, password):
    session = aiohttp.ClientSession()
    fpl = FPL(session)
    try:
        await fpl.login(email=email, password=password)
    except ValueError:
        return Response({"status": "Login error"}, status.HTTP_400_BAD_REQUEST)
    user = await fpl.get_user()
    await sync_single_user(self.request.user.id, user)
    user_team_name = user.name
    user_team = await user.get_team()
    print(user_team)
    await sync_single_team(self.request.user.id, user_team, user_team_name)
    await session.close()
    return Response({"status": "ok"})


async def sync_user_gameweek(self, fpl_user_id):
    session = aiohttp.ClientSession()
    fpl = FPL(session)
    user = await fpl.get_user(fpl_user_id)
    gameweek = await user.get_gameweek_history()
    await session.close()
    test = await update_user_with_gameweek_data(fpl_user_id, gameweek)


@sync_to_async()
def update_user_with_gameweek_data(fpl_user_id, gameweek):
    user = FPLUser.objects.filter(fpl_user_id=fpl_user_id).first()
    # print(user)
    for week in gameweek:
        gw, created = GameweekHistory.objects.get_or_create(
            user_id=user,
            gameweek_number=week["event"],
            defaults={"points": 0, "rank": 0},
        )
        gw.points = week["points"]
        gw.rank = week["rank"]
        gw.save()
        print(gw)
