from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from .models import FPLUser, Player, Team, League, Prize, TeamLeague, GameweekHistory
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class FPLTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(FPLTokenObtainPairSerializer, cls).get_token(user)

        # token["username"] = user.username
        return token


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True, validators=[UniqueValidator(queryset=FPLUser.objects.all())]
    )

    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = FPLUser
        fields = (
            "username",
            "password",
            "password2",
            "email",
            "first_name",
            "last_name",
            "consent",
            "address",
            "dob",
            "phone",
        )
        extra_kwargs = {
            "first_name": {"required": True},
            "last_name": {"required": True},
            "email": {"required": True},
        }

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError({"password": "Passwords don't match"})

        return attrs

    def create(self, validated_data):
        user = FPLUser.objects.create(
            username=validated_data["username"],
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            consent=validated_data["consent"],
            address=validated_data["address"],
            dob=validated_data["dob"],
            phone=validated_data["phone"],
        )

        user.set_password(validated_data["password"])
        user.save()

        return user


class FPLUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FPLUser
        fields = "__all__"
        read_only_fields = ("id", "created_date", "updated_date")

    def update(self, instance, validated_data):
        user = FPLUser.objects.get(pk=instance.id)
        FPLUser.objects.filter(pk=instance.id).update(**validated_data)

        return user


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = "__all__"


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = "__all__"

    def create(self, validated_data):
        players = validated_data.pop("players")
        team = Team.objects.create(**validated_data)

        for p in players:
            team.players.add(p)
        team.save()
        return team


class TeamWithPlayersSerializer(TeamSerializer):
    players = PlayerSerializer(many=True)

    class Meta:
        model = Team
        fields = "__all__"


class PrizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prize
        fields = "__all__"


class LeagueSerializer(serializers.ModelSerializer):
    league_name = serializers.ReadOnlyField()
    prize = PrizeSerializer(read_only=True, many=True)

    class Meta:
        model = League
        fields = "__all__"


class LeagueValueSerializer(LeagueSerializer):
    class Meta:
        model = League
        fields = (
            "league_name",
            "value",
        )


class TeamLeagueSerializer(serializers.ModelSerializer):
    league = LeagueSerializer()

    class Meta:
        model = TeamLeague
        fields = ("league",)


class TeamLeagueWithTeamsSerializer(TeamLeagueSerializer):
    league = LeagueSerializer()
    team = TeamWithPlayersSerializer()
    overall_rank = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()
    captain = serializers.SerializerMethodField()
    vice_captain = serializers.SerializerMethodField()

    class Meta:
        model = TeamLeague
        fields = ("team", "overall_rank", "username", "captain", "vice_captain")
        ordering = ("overall_rank",)

    def get_overall_rank(self, obj):
        return obj.team.user.fpl_overall_rank

    def get_username(self, obj):
        return f"{obj.team.user.first_name} {obj.team.user.last_name}"

    def get_captain(self, obj):
        if obj.team.captain is not None:
            return obj.team.captain.lastname
        return ""

    def get_vice_captain(self, obj):
        if obj.team.vice_captain is not None:
            return obj.team.vice_captain.lastname
        return ""


class GameweekHistorySerializer(serializers.ModelSerializer):
    league = LeagueValueSerializer()

    class Meta:
        model = GameweekHistory
        fields = "__all__"
