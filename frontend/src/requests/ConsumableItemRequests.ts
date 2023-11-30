import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../config";
import ApiResponse from "../models/RequestModel";
import ConsumableItemModel from "../models/ConsumableItemModel";

const CONSUMABLE_ITEMS_URL = `${API_BASE_URL}consumable-items/`;

export async function getConsumableItems(): Promise<
  AxiosResponse<ApiResponse<ConsumableItemModel>>
> {
  const response = await axios.get<ApiResponse<ConsumableItemModel>>(
    CONSUMABLE_ITEMS_URL
  );

  return response;
}
