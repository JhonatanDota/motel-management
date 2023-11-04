from rest_framework import viewsets
from motel.models import Accommodation
from motel.serializers.accommodation_serializer import AccommodationSerializer

class AccommodationViewSet(viewsets.ModelViewSet):
    queryset = Accommodation.objects.all()
    serializer_class = AccommodationSerializer
    