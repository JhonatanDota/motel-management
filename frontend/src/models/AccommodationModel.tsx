import ConsumableItemModel from "./ConsumableItemModel";
import RoomModel from "./RoomModel";

export default interface AccommodationModel {
  id: number;
  room: RoomModel;
  consumable_items: ConsumableItemModel[];
  alias: string;
  value: number;
  entry_time: string;
  exit_time: string;
  discount: number;
  paid: boolean;
}
