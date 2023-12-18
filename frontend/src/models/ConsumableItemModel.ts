export default interface ConsumableItemModel {
  id: number;
  name: string;
  price: number;
  description?: string;
  image: File | string | null;
}

export type ConsumableItemWithoutIdModel = Omit<ConsumableItemModel, "id">;
