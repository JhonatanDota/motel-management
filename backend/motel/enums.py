from django.db.models import TextChoices

class RoomTypeEnum(TextChoices):
    NORMAL = "NORMAL"
    LUX = "LUX"