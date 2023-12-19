import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../config";
import { ApiResponseList, ApiResponse } from "../models/RequestModel";
import ConsumableItemModel, {
  ConsumableItemWithoutIdModel,
} from "../models/ConsumableItemModel";

const CONSUMABLE_ITEMS_URL = `${API_BASE_URL}consumable-items/`;

export async function addConsumableItem(data: ConsumableItemWithoutIdModel) {
  const response = await axios.post(CONSUMABLE_ITEMS_URL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
}

export async function editConsumableItem(
  id: number,
  data: ConsumableItemModel
) {
  const response = await axios.patch(`${CONSUMABLE_ITEMS_URL}${id}/`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
}

export async function getConsumableItems(
  url?: string
): Promise<AxiosResponse<ApiResponseList<ConsumableItemModel>>> {
  const response = await axios.get<ApiResponseList<ConsumableItemModel>>(
    url ?? CONSUMABLE_ITEMS_URL
  );

  return response;
}
