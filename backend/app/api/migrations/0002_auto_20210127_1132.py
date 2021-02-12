# Generated by Django 3.1.4 on 2021-01-27 11:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="gameweekhistory",
            old_name="user_id",
            new_name="user",
        ),
        migrations.RenameField(
            model_name="subleague",
            old_name="league_id",
            new_name="league",
        ),
        migrations.AddField(
            model_name="teamleague",
            name="subleague",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="api.subleague",
            ),
        ),
        migrations.DeleteModel(
            name="Subleagueteams",
        ),
    ]
