from rest_framework.test import APITestCase
from motel.models import ConsumableItem
from utils.factories.consumable_item_factory import ConsumableItemFactory
from utils.functions.generate_file import generate_image


class TestConsumableItem(APITestCase):
    def setUp(self):
        self.url = "/api/consumable-items/"

    """
        Test Create
    """

    def test_create(self):
        payload = {
            "name": "Brahma",
            "price": 7.50,
            "description": "Trincando de gelada",
            "image": generate_image(),
        }

        response = self.client.post(self.url, payload)
        self.assertEquals(response.status_code, 201)

        response_data = response.json()

        self.assertTrue("id" in response_data)
        self.assertEquals(response_data["name"], payload["name"])
        self.assertEquals(response_data["price"], payload["price"])
        self.assertEquals(response_data["description"], payload["description"])
        self.assertIsNotNone(response_data["image"])

    def test_create_without_description(self):
        payload = {
            "name": "Suco",
            "price": 2,
        }

        response = self.client.post(self.url, payload)
        self.assertEquals(response.status_code, 201)

    def test_try_create_without_data(self):
        payload = {}

        response = self.client.post(self.url, payload)
        self.assertEquals(response.status_code, 400)

    def test_try_create_without_name(self):
        payload = {
            "price": 2.0,
        }

        response = self.client.post(self.url, payload)
        self.assertEquals(response.status_code, 400)

        response_data = response.json()

        self.assertEquals(len(response_data), 1)
        self.assertEquals(response_data["name"][0], "This field is required.")

    def test_try_create_without_price(self):
        payload = {
            "name": "Item",
        }

        response = self.client.post(self.url, payload)
        self.assertEquals(response.status_code, 400)

        response_data = response.json()

        self.assertEquals(len(response_data), 1)
        self.assertEquals(response_data["price"][0], "This field is required.")

    """
        Test Update
    """

    def test_update(self):
        item = ConsumableItemFactory(
            name="Just a Item",
            price=10.30,
            description="Simple Description",
        )

        payload = {
            "name": "Another item",
            "price": 32.9,
            "description": "Another Description",
        }

        response = self.client.put(f"{self.url}{item.id}/", payload)
        self.assertEquals(response.status_code, 200)

        response_data = response.json()

        self.assertEquals(response_data["name"], payload["name"])
        self.assertEquals(response_data["price"], payload["price"])
        self.assertEquals(response_data["description"], payload["description"])

    def test_update_name(self):
        item = ConsumableItemFactory(name="First Name")

        payload = {"name": "Another Name"}

        response = self.client.patch(f"{self.url}{item.id}/", payload)
        self.assertEquals(response.status_code, 200)

        self.assertEquals(response.json()["name"], payload["name"])

    def test_update_price(self):
        item = ConsumableItemFactory(price=20)

        payload = {"price": 39.9}

        response = self.client.patch(f"{self.url}{item.id}/", payload)
        self.assertEquals(response.status_code, 200)

        self.assertEquals(response.json()["price"], payload["price"])

    def test_update_description(self):
        item = ConsumableItemFactory(description="Simple Description")

        payload = {"description": "Full Description"}

        response = self.client.patch(f"{self.url}{item.id}/", payload)
        self.assertEquals(response.status_code, 200)

        self.assertEquals(response.json()["description"], payload["description"])

    def test_update_image(self):
        item = ConsumableItemFactory()

        self.assertFalse(bool(item.image))

        payload = {"image": generate_image()}

        response = self.client.patch(f"{self.url}{item.id}/", payload)

        self.assertEquals(response.status_code, 200)
        self.assertIsNotNone(response.json()["image"])

        item_from_db = ConsumableItem.objects.get(pk=item.id)

        self.assertTrue(bool(item_from_db.image))

    """
        Test Get
    """

    def test_retrieve(self):
        consumable_item = ConsumableItemFactory()

        response = self.client.get(f"{self.url}{consumable_item.id}/")
        self.assertEquals(response.status_code, 200)

        response_data = response.json()

        self.assertEquals(response_data["id"], consumable_item.id)
        self.assertEquals(response_data["name"], consumable_item.name)
        self.assertEquals(response_data["price"], consumable_item.price)
        self.assertEquals(response_data["description"], consumable_item.description)
        self.assertTrue("image" in response_data)

    def test_list(self):
        TO_CREATE_QTN = 11
        EXPECTED_PAGINATION_ITEMS = 10
        EXPECTED_PAGES = 2

        for _ in range(TO_CREATE_QTN):
            ConsumableItemFactory()

        response = self.client.get(self.url)
        self.assertEquals(response.status_code, 200)

        response_data = response.json()
        results = response_data["results"]
        meta = response_data["meta"]

        self.assertEquals(EXPECTED_PAGINATION_ITEMS, len(results))
        self.assertEquals(EXPECTED_PAGES, meta["pagination"]["pages"])
        self.assertEquals(TO_CREATE_QTN, meta["pagination"]["count"])


# TODO: Delete Tests
