from rest_framework import serializers
from motel.models import Accommodation
from motel.serializers.consumable_item_serializer import ConsumableItemSerializer

class AccommodationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accommodation
        fields = [
            "id",
            "room",
            "consumable_items",
            "alias",
            "value",
            "entry_time",
            "exit_time",
            "discount",
            "paid",
        ]
        
    def to_representation(self, instance):
        consumable_items = instance.consumable_items.all()
        
        serializer_data = super().to_representation(instance)
        serializer_data["consumable_items"] = ConsumableItemSerializer(consumable_items, many=True).data
        
        return serializer_data