import factory
from factory.django import DjangoModelFactory
from random import randrange, choices

from .models import FPLUser, Team, Player, League


class TeamFactory(DjangoModelFactory):
    class Meta:
        model = Team

    team_name = factory.Faker("company")
    user = factory.SubFactory("api.factories.FPLUserFactory")
    # league = factory.Iterator(League.objects.all())

    @factory.post_generation
    def players(self, create, extracted, **kwargs):
        players = choices(Player.objects.all(), k=12)
        for p in players:
            self.players.add(p)

    @factory.post_generation
    def leagues(self, create, extracted, **kwargs):
        league = League.objects.all().first()
        self.league.add(league)


class FPLUserFactory(DjangoModelFactory):
    class Meta:
        model = FPLUser

    first_name = factory.Faker("first_name")
    username = factory.Faker("email")
    last_name = factory.Faker("last_name")
    fpl_overall_rank = factory.LazyAttribute(lambda x: randrange(1, 10000))
