from django.urls import path, include
from rest_framework.routers import DefaultRouter

from motel.views import AccommodationViewSet

router = DefaultRouter()

router.register(r"accommodation", AccommodationViewSet ,basename="accommodation")

urlpatterns = [
    path("", include(router.urls)),
]