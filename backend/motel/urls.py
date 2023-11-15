from django.urls import path, include
from rest_framework.routers import DefaultRouter

from motel.views import AccommodationViewSet, ConsumableItemViewSet, RoomViewSet

router = DefaultRouter()

router.register(r"accommodation", AccommodationViewSet, basename="accommodation")

router.register(r"consumable-item", ConsumableItemViewSet, basename="consumable-item")

router.register(r"room", RoomViewSet, basename="room")

urlpatterns = [
    path("", include(router.urls)),
]