import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../config";
import RoomModel, { RoomWithoutIdModel } from "../models/RoomModel";
import { ApiResponseList } from "../models/RequestModel";

const ROOM_URL = `${API_BASE_URL}rooms/`;

export async function addRoom(data: RoomWithoutIdModel) {
  const response = await axios.post(ROOM_URL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
}

export async function getRooms(
  params?: object,
  page?: number
): Promise<AxiosResponse<ApiResponseList<RoomModel>>> {
  const response = await axios.get<ApiResponseList<RoomModel>>(
    ROOM_URL,
    { params: { ...params, "page[number]": page } }
  );

  return response;
}
