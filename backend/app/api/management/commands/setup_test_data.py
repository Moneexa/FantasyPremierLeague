from django.db import transaction
from django.core.management.base import BaseCommand

from api.models import FPLUser
from api.factories import FPLUserFactory, TeamFactory
from random import choice

NUM_USERS = 50
NUM_TEAMS = 17


class Command(BaseCommand):
    help = "Generate test data"

    @transaction.atomic
    def handle(self, *args, **options):
        self.stdout.write("Creating users...")

        users = []
        for _ in range(NUM_USERS):
            user = FPLUserFactory()
            users.append(user)

        self.stdout.write("Creating teams...")
        for _ in range(NUM_TEAMS):
            user = choice(users)
            team = TeamFactory()
