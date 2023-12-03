export default interface ConsumableItemModel {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: File | string;
}

export type ConsumableItemWithoutIdModel = Omit<ConsumableItemModel, "id">;
