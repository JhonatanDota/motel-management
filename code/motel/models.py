from django.db import models
from motel.enums import RoomTypeEnum

class Room(models.Model):
    number = models.IntegerField()
    hour_value = models.FloatField()
    type = models.CharField(choices=RoomTypeEnum.choices, max_length=6)

class ConsumableItem(models.Model):
    name = models.CharField(max_length=120)
    price = models.FloatField()
    description = models.TextField(null=True, blank=True)

class Accommodation(models.Model):
    room = models.ForeignKey(Room, on_delete=models.PROTECT, related_name="accommodations")
    consumable_item = models.ManyToManyField(ConsumableItem, blank=True)
    alias = models.CharField(max_length=120)
    value = models.FloatField(null=True, blank=True)
    entry_time = models.DateTimeField()
    exit_time = models.DateTimeField()
    discount = models.BooleanField(default=False)
    paid = models.BooleanField(default=False)
    