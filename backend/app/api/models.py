from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext as _


class FPLUser(AbstractUser):
    first_name = models.CharField(max_length=255, null=True)
    last_name = models.CharField(max_length=255, null=True)
    username = models.CharField(max_length=255, null=True, unique=True)
    address = models.CharField(max_length=255, null=True)
    dob = models.CharField(max_length=12, null=True)
    phone = models.CharField(max_length=40, null=True)
    consent = models.BooleanField(default=False)
    fpl_user_id = models.IntegerField(default=0, null=True)
    fpl_overall_rank = models.IntegerField(default=0, null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name}"


class Player(models.Model):
    id = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    league_team_name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"


class Team(models.Model):
    team_name = models.CharField(max_length=255, null=True)
    user = models.OneToOneField(
        FPLUser,
        related_name="team_user",
        on_delete=models.CASCADE,
        primary_key=True,
        unique=True,
    )
    players = models.ManyToManyField(Player, blank=True)
    league = models.ManyToManyField("League", through="TeamLeague", blank=True)
    captain = models.ForeignKey(
        Player,
        blank=True,
        null=True,
        related_name="team_captain",
        on_delete=models.CASCADE,
    )
    vice_captain = models.ForeignKey(
        Player,
        blank=True,
        null=True,
        related_name="team_vice_captain",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"{self.team_name}"


class Prize(models.Model):
    label = models.CharField(max_length=255)
    value = models.IntegerField()

    def __str__(self):
        return f"{self.label}"


class League(models.Model):
    class LeagueValues(models.IntegerChoices):
        ONE_DOLLAR = 1, _("One dollar")
        TEN_DOLLARS = 10, _("Ten dollars")
        TWENTY_DOLLARS = 20, _("Twenty dollars")
        FIFTY_DOLLARS = 50, _("Fifty dollars")
        HUNDRED_DOLLARS = 100, _("Hundred dollars")
        TWO_HUNDRED_DOLLARS = 200, _("Two hundred dollars")
        ONE_THOUSAND_DOLLARS = 1000, _("One thousand dollars")

    class LeaguePeriodValues(models.IntegerChoices):
        WEEKLY = 1, _("weekly")
        MONTHLY = 2, _("monthly")

    value = models.IntegerField(choices=LeagueValues.choices)
    period = models.IntegerField(choices=LeaguePeriodValues.choices)
    prize = models.ManyToManyField("Prize", blank=True)

    @property
    def league_name(self):
        return f"{self.get_value_display()}"

    def __str__(self):
        return f"{self.get_value_display()} league"


class Subleague(models.Model):
    league = models.ForeignKey(League, on_delete=models.CASCADE)
    subleague_name = models.CharField(max_length=255)

    def __str__(self):
        return self.subleague_name


class GameweekHistory(models.Model):
    user = models.ForeignKey("FPLUser", on_delete=models.PROTECT)
    league = models.ForeignKey("League", on_delete=models.CASCADE)
    gameweek_number = models.IntegerField()
    points = models.IntegerField()
    rank = models.IntegerField()


class TeamLeague(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    league = models.ForeignKey(League, on_delete=models.CASCADE)
    subleague = models.ForeignKey(
        Subleague, on_delete=models.CASCADE, null=True, blank=True
    )
