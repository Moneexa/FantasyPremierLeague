from api.serializers import FPLUserSerializer, PlayerSerializer
import pytest


@pytest.mark.django_db
def test_valid_user_serializer():
    valid_data = {
        "username": "asd",
        "password": "password",
        "name": "test",
        "lastname": "test",
        "consent": True,
    }

    serializer = FPLUserSerializer(data=valid_data)
    if not serializer.is_valid():
        print(serializer.errors)
    assert serializer.is_valid()
    assert serializer.validated_data == valid_data
    assert serializer.errors == {}


@pytest.mark.django_db
def test_invalid_user_serializer():
    invalid_data = {
        "password": "password",
        "username": "asd",
        "name": "test",
        "consent": True,
    }

    serializer = FPLUserSerializer(data=invalid_data)
    assert not serializer.is_valid() == False
