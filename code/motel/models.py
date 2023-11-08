from django.db import models
from app.models import Model
from motel.enums import RoomTypeEnum

class Room(Model):
    number = models.IntegerField()
    hour_value = models.FloatField()
    type = models.CharField(choices=RoomTypeEnum.choices, max_length=6)
    
    def __str__(self):
        return self.number

class ConsumableItem(Model):
    name = models.CharField(max_length=120)
    price = models.FloatField()
    description = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.name

class Accommodation(Model):
    room = models.ForeignKey(Room, on_delete=models.PROTECT, related_name="accommodations")
    consumable_items = models.ManyToManyField(ConsumableItem, blank=True)
    alias = models.CharField(max_length=120)
    value = models.FloatField(null=True, blank=True)
    entry_time = models.DateTimeField()
    exit_time = models.DateTimeField()
    discount = models.BooleanField(default=False)
    paid = models.BooleanField(default=False)
    
    def __str__(self):
        return self.alias