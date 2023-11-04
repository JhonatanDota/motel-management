from rest_framework import viewsets
from motel.models import Accommodation, ConsumableItem, Room
from motel.serializers.accommodation_serializer import AccommodationSerializer
from motel.serializers.consumable_item_serializer import ConsumableItemSerializer
from motel.serializers.room_serializer import RoomSerializer

class AccommodationViewSet(viewsets.ModelViewSet):
    queryset = Accommodation.objects.all()
    serializer_class = AccommodationSerializer
    
class ConsumableItemViewSet(viewsets.ModelViewSet):
    queryset = ConsumableItem.objects.all()
    serializer_class = ConsumableItemSerializer
    
class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer