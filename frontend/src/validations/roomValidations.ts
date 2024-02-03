import { RoomTypeEnum } from "../data/RoomData";
import { RoomWithoutIdModel } from "../models/RoomModel";
import BaseValidationClasses from "./baseValidationsClass";

export default class RoomValidations extends BaseValidationClasses {
  room: RoomWithoutIdModel;

  constructor(room: RoomWithoutIdModel) {
    super();
    this.room = room;
  }

  validateData(): boolean {
    if (this.room.type in RoomTypeEnum === false) {
      this.showErrorToast("Tipo de quarto desconhecido.");
      return false;
    }

    return true;
  }
}
