from factory.django import DjangoModelFactory
from factory import SubFactory
from motel.models import Accommodation
from utils.factories.room_factory import RoomFactory
from faker import Faker

faker = Faker()

class AccommodationFactory(DjangoModelFactory):
    class Meta:
        model = Accommodation

    room = SubFactory(RoomFactory)
    alias = faker.name()
    entry_time = faker.date_time()