from django.db import models
from app.models import Model
from motel.enums import RoomTypeEnum
from utils.functions.upload_to_paths import set_consumable_item_path
from django.core.validators import MinValueValidator


class Room(Model):
    number = models.IntegerField(unique=True)
    hour_value = models.FloatField(validators=[MinValueValidator(0.0)])
    type = models.CharField(choices=RoomTypeEnum.choices, max_length=6)

    def __str__(self):
        return f"{self.number} - {self.hour_value}"


class ConsumableItem(Model):
    name = models.CharField(max_length=120)
    price = models.FloatField(validators=[MinValueValidator(0.0)])
    description = models.TextField(null=True)
    image = models.ImageField(
        upload_to=set_consumable_item_path,
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.name


class Accommodation(Model):
    room = models.ForeignKey(
        Room, on_delete=models.PROTECT, related_name="accommodations"
    )
    consumable_items = models.ManyToManyField(ConsumableItem, blank=True)
    alias = models.CharField(max_length=120)
    value = models.FloatField(null=True, blank=True)
    entry_time = models.DateTimeField()
    exit_time = models.DateTimeField(null=True, blank=True)
    discount = models.BooleanField(default=False)
    paid = models.BooleanField(default=False)

    def __str__(self):
        return self.alias
