from rest_framework.test import APITestCase
from utils.factories.accommodation_factory import AccommodationFactory
from utils.factories.room_factory import RoomFactory

class TestAccommodation(APITestCase):
    def setUp(self):
        self.url = "/api/accommodation/"
        
    """
        Test Create
    """
        
    def test_create_with_basic_data(self):
        
        payload = {
            "room": RoomFactory().id,
            "alias": "Careca",
            "entry_time": "2023-10-10 00:10:00"
        }
        
        response = self.client.post(self.url, payload)
        self.assertEquals(response.status_code, 201)