from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from .views import (
    FPLUserViewSet,
    FPLTokenObtainPair,
    RegisterView,
    LeagueViewSet,
    TeamViewSet,
)

router = DefaultRouter()

router.register(prefix=r"api/users", viewset=FPLUserViewSet, basename="users")
router.register(prefix=r"api/league", viewset=LeagueViewSet, basename="league")
router.register(prefix=r"api/team", viewset=TeamViewSet, basename="teams")
urlpatterns = router.urls + [
    path("api/login/", FPLTokenObtainPair.as_view(), name="token_obtain_pair"),
    path("api/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/register/", RegisterView.as_view(), name="user_register"),
]
