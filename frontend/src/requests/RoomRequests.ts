import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../config";
import { RoomWithoutIdModel } from "../models/RoomModel";

const ROOM_URL = `${API_BASE_URL}rooms/`;

export async function addRoom(data: RoomWithoutIdModel) {
  const response = await axios.post(ROOM_URL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
}
