from rest_framework import serializers
from motel.models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = [
            "id",
            "number",
            "hour_value",
            "type",
        ]
