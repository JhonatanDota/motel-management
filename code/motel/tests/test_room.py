from rest_framework.test import APITestCase
from motel.enums import RoomTypeEnum


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
