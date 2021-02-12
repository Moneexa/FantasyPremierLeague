from django import forms
from .models import Player


class PlayerChangeListForm(forms.ModelForm):
    players = forms.ModelMultipleChoiceField(
        queryset=Player.objects.all(), required=False
    )
