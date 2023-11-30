from django.urls import path, include
from rest_framework.routers import DefaultRouter

from motel.views import AccommodationViewSet, ConsumableItemViewSet, RoomViewSet

router = DefaultRouter()

router.register(r"accommodations", AccommodationViewSet, basename="accommodations")

router.register(r"consumable-items", ConsumableItemViewSet, basename="consumable-items")

router.register(r"rooms", RoomViewSet, basename="rooms")

urlpatterns = [
    path("", include(router.urls)),
]