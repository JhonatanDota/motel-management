from rest_framework.test import APITestCase
from motel.enums import RoomTypeEnum

from utils.factories.room_factory import RoomFactory


class TestRoom(APITestCase):
    def setUp(self):
        self.url = "/api/room/"

    """
        Test Create
    """

    def test_create(self):
        payload = {
            "number": 1,
            "hour_value": 200,
            "type": RoomTypeEnum.NORMAL,
        }

        response = self.client.post(self.url, payload)
        self.assertEquals(response.status_code, 201)

        response_data = response.json()

        self.assertTrue("id" in response_data)
        self.assertEquals(response_data["number"], payload.get("number"))
        self.assertEquals(response_data["hour_value"], payload.get("hour_value"))
        self.assertEquals(response_data["type"], payload.get("type"))

    def test_try_create_without_data(self):
        payload = {}

        response = self.client.post(self.url, payload)
        self.assertEquals(response.status_code, 400)

    def test_try_create_without_number(self):
        payload = {
            "hour_value": 200,
            "type": RoomTypeEnum.NORMAL,
        }

        response = self.client.post(self.url, payload)
        self.assertEquals(response.status_code, 400)

        response_data = response.json()

        self.assertEquals(len(response_data), 1)
        self.assertEquals(response_data["number"][0], "This field is required.")

    def test_try_create_without_hour_value(self):
        payload = {
            "number": 200,
            "type": RoomTypeEnum.NORMAL,
        }

        response = self.client.post(self.url, payload)
        self.assertEquals(response.status_code, 400)

        response_data = response.json()

        self.assertEquals(len(response_data), 1)
        self.assertEquals(response_data["hour_value"][0], "This field is required.")

    def test_try_create_without_type(self):
        payload = {
            "number": 200,
            "hour_value": 150,
        }

        response = self.client.post(self.url, payload)
        self.assertEquals(response.status_code, 400)

        response_data = response.json()

        self.assertEquals(len(response_data), 1)
        self.assertEquals(response_data["type"][0], "This field is required.")

    """
        Test Update
    """

    def test_update(self):
        room = RoomFactory(
            number=5,
            hour_value=55.5,
            type=RoomTypeEnum.NORMAL,
        )

        payload = {"number": 2, "hour_value": 12.9, "type": RoomTypeEnum.LUX}

        response = self.client.put(f"{self.url}{room.id}/", payload)
        self.assertEquals(response.status_code, 200)

        response_data = response.json()

        self.assertEquals(response_data["number"], payload["number"])
        self.assertEquals(response_data["hour_value"], payload["hour_value"])
        self.assertEquals(response_data["type"], payload["type"])

    def test_update_number(self):
        room = RoomFactory(number=1)

        payload = {
            "number": 155,
        }

        response = self.client.patch(f"{self.url}{room.id}/", payload)
        self.assertEquals(response.status_code, 200)

        self.assertEquals(response.json()["number"], payload["number"])

    def test_update_hour_value(self):
        room = RoomFactory(hour_value=22)

        payload = {
            "hour_value": 44.6,
        }

        response = self.client.patch(f"{self.url}{room.id}/", payload)
        self.assertEquals(response.status_code, 200)

        self.assertEquals(response.json()["hour_value"], payload["hour_value"])

    def test_update_type(self):
        room = RoomFactory(type=RoomTypeEnum.NORMAL)

        payload = {"type": RoomTypeEnum.LUX}

        response = self.client.patch(f"{self.url}{room.id}/", payload)
        self.assertEquals(response.status_code, 200)

        self.assertEquals(response.json()["type"], payload["type"])

    """
        Test Get
    """

    def test_retrieve(self):
        room = RoomFactory()

        response = self.client.get(f"{self.url}{room.id}/")
        self.assertEquals(response.status_code, 200)

        response_data = response.json()

        self.assertEquals(response_data["id"], room.id)
        self.assertEquals(response_data["number"], room.number)
        self.assertEquals(response_data["hour_value"], room.hour_value)
        self.assertEquals(response_data["type"], room.type)

    def test_list(self):
        TO_CREATE_QTN = 11
        EXPECTED_PAGINATION_ITEMS = 10
        EXPECTED_PAGES = 2

        for _ in range(TO_CREATE_QTN):
            RoomFactory()

        response = self.client.get(self.url)
        self.assertEquals(response.status_code, 200)

        response_data = response.json()
        results = response_data["results"]
        meta = response_data["meta"]

        self.assertEquals(EXPECTED_PAGINATION_ITEMS, len(results))
        self.assertEquals(EXPECTED_PAGES, meta["pagination"]["pages"])
        self.assertEquals(TO_CREATE_QTN, meta["pagination"]["count"])


# TODO: Delete Tests