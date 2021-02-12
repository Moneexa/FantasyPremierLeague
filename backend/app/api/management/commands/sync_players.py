from django.core.management.base import BaseCommand, CommandError
from api.utils import sync_players
import asyncio


class Command(BaseCommand):
    help = "Sync players list from FPL to local database"

    def handle(self, *args, **options):
        # sync_players()
        asyncio.run(sync_players())
        self.stdout.write(self.style.SUCCESS("Import successful"))
