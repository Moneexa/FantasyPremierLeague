from django.urls import reverse
import json
import pytest

from api.models import FPLUser


@pytest.mark.django_db
def test_create_user(client):
    users = FPLUser.objects.all()
    assert len(users) == 0

    resp = client.post(
        "/api/users/",
        {"username": "test@test.com", "password": "Pw123"},
        content_type="application/json",
    )
    assert resp.status_code == 201
    assert resp.data["username"] == "test@test.com"

    users = FPLUser.objects.all()
    assert len(users) == 1


@pytest.mark.django_db
def test_create_user_invalid_json(client):
    users = FPLUser.objects.all()
    assert len(users) == 0

    resp = client.post(
        "/api/users/",
        {"username": "test@test.com"},
        content_type="application/json",
    )

    assert resp.status_code == 400
    users = FPLUser.objects.all()
    assert len(users) == 0


@pytest.mark.django_db
def test_create_user_invalid_json_key(client):
    users = FPLUser.objects.all()
    assert len(users) == 0

    resp = client.post(
        "/api/users/",
        {"username": "test@test.com", "asd": "asd"},
        content_type="application/json",
    )

    assert resp.status_code == 400
    users = FPLUser.objects.all()
    assert len(users) == 0


@pytest.mark.django_db
def test_get_single_user(client):
    user = FPLUser.objects.create(
        username="test@test.com",
        password="test123",
        name="asd",
        lastname="asd",
    )
    resp = client.get(f"/api/users/{user.id}/")
    assert resp.status_code == 200
    assert resp.data["username"] == "test@test.com"


def test_get_single_movie_invalid_id(client):
    resp = client.get(f"/api/users/asd/")
    assert resp.status_code == 404
