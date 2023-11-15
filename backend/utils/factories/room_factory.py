from factory.django import DjangoModelFactory
import random
from faker import Faker

from motel.models import Room
from motel.enums import RoomTypeEnum

class RoomFactory(DjangoModelFactory):
    class Meta:
        model = Room
        
    number = Faker().random_int(min=1, max=20)
    hour_value = round(random.uniform(50, 300), 2)
    type = random.choice(list(RoomTypeEnum))