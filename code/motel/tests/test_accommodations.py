from rest_framework.test import APITestCase
from utils.factories.accommodation_factory import AccommodationFactory

from django.forms.models import model_to_dict

class TestAccommodation(APITestCase):
    def setUp(self):
        self.url = "/api/accommodation/"
        
    def test_create(self):
        pass