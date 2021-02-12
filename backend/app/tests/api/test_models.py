import pytest

from api.models import FPLUser, Team


@pytest.mark.django_db
def test_user_model():
    user = FPLUser(name="test", lastname="lastname", consent=True)
    user.save()
    assert user.name == "test"
    assert user.lastname == "lastname"
    assert user.consent == True
    assert str(user) == user.name
