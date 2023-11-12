from rest_framework.test import APITestCase
from utils.factories.consumable_item_factory import ConsumableItemFactory

class TestConsumableItem(APITestCase):
    def setUp(self):
        self.url = "/api/consumable-item/"
        
    """
        Test Create
    """
    
    def test_create(self):
        payload = {
            
        }
    
    