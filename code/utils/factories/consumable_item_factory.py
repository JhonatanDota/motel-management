from factory.django import DjangoModelFactory
import random
from faker import Faker

from motel.models import ConsumableItem

faker = Faker()

class ConsumableItemFactory(DjangoModelFactory):
    class Meta:
        model = ConsumableItem
        
    name = faker.name()
    price = round(random.uniform(3, 35), 2)
    description = faker.text()