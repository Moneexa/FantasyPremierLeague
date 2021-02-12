from celery import shared_task
from api.constants import MAX_PLAYERS_PER_LEAGUE, MIN_PLAYERS_PER_LEAGUE
from api.models import Team, Subleague, League, TeamLeague


# @shared_task()
def generate_sub_leagues():
    leagues = League.objects.all()
    for league in leagues:
        qs = (
            Team.objects.filter(league=league)
            .values(
                "user_id",
                "team_name",
                "league",
                "user_id__fpl_overall_rank",
                "league__value",
            )
            .order_by("-user_id__fpl_overall_rank")
        )
        n, l = divmod(len(qs), MAX_PLAYERS_PER_LEAGUE)  # number of teams
        if l >= MIN_PLAYERS_PER_LEAGUE:
            n += 1

        teams = list(qs)
        splitted_teams_list = [
            teams[count : count + MAX_PLAYERS_PER_LEAGUE]
            for count in range(int(len(teams) / MAX_PLAYERS_PER_LEAGUE + 1))
        ]
        for i, x in enumerate(range(n), start=0):
            subleague = Subleague.objects.create(
                league=league, subleague_name=f"Subleague {i}"
            )
            for team in splitted_teams_list[i]:
                tl = TeamLeague.objects.get(
                    team=Team.objects.get(user=team["user_id"]),
                    league=league,
                )
                tl.subleague = subleague
                tl.save()
