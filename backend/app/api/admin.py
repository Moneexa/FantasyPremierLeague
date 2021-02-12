from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DefaultUserAdmin
from django.contrib.admin.views.main import ChangeList
from django.db.models.aggregates import Sum
from .models import FPLUser, Player, Team, League, Subleague, TeamLeague, Prize
from .forms import PlayerChangeListForm
from django.urls import reverse
from django.utils.html import format_html


@admin.register(FPLUser)
class FPLUserAdmin(admin.ModelAdmin):
    fields = (
        "first_name",
        "last_name",
        "consent",
        "username",
        "address",
        "dob",
        "phone",
    )
    list_display = (
        "first_name",
        "last_name",
        "username",
        "team",
        "consent",
        "fpl_overall_rank",
        "address",
        "dob",
        "phone",
    )
    readonly_fields = ("created_date", "updated_date")

    def team(self, obj):
        team = Team.objects.get(user=obj.id)
        link = reverse("admin:api_team_change", args=[team.user.id])
        return format_html('<a href="{}">{}</a>', link, team.team_name)


class LeagueInLine(admin.StackedInline):
    model = Team.league.through

    def has_add_permission(self, request, obj):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def has_change_permission(self, request, obj=None):
        return False


class PrizeInline(admin.StackedInline):
    model = League.prize.through


@admin.register(League)
class LeagueAdmin(admin.ModelAdmin):
    fields = (
        "value",
        "period",
    )
    inlines = [LeagueInLine, PrizeInline]
    list_display = ("value", "period")


@admin.register(Subleague)
class Subleague(admin.ModelAdmin):
    readonly_fields = ("teams_list",)
    fields = ("subleague_name", "teams_list")

    def teams_list(self, obj):
        teams_leagues = TeamLeague.objects.filter(subleague=obj)
        teams = [Team.objects.get(pk=team.team_id) for team in teams_leagues]
        return ", ".join([team.team_name for team in teams])


@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    fields = ("firstname", "lastname", "league_team_name")
    list_display = ("firstname", "lastname", "league_team_name")
    readonly_fields = ("firstname", "lastname", "league_team_name")


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super(TeamAdmin, self).get_queryset(request)
        return qs.annotate(entries_sum=Sum("league"))

    def entries_sum(self, obj):
        return obj.entries_sum

    fields = ("user", "players", "team_name")
    list_display = (
        "user",
        "team_name",
        "entries_sum",
    )
    readonly_fields = ("user", "players", "team_name")

    def get_changelist_form(self, request, **kwargs):
        return PlayerChangeListForm


@admin.register(Prize)
class PrizeAdmin(admin.ModelAdmin):
    fields = ("label", "value")
    list_display = ("label", "value")
