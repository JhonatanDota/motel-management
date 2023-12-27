export default interface RoomModel {
  id: number;
  number: number;
  hour_value: number;
  type: string;
}

export type RoomWithoutIdModel = Omit<RoomModel, "id">;
