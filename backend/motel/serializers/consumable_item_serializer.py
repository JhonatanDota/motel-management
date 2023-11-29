from rest_framework import serializers
from motel.models import ConsumableItem


class ConsumableItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsumableItem
        fields = [
            "id",
            "name",
            "price",
            "description",
            "image",
        ]
