export default interface ConsumableItemModel {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: File;
}

export type ConsumableItemAddModel = Omit<ConsumableItemModel, "id">; 
