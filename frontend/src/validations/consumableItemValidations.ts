import { ConsumableItemWithoutIdModel } from "../models/ConsumableItemModel";
import BaseValidationClasses from "./baseValidationsClass";

const MIN_NAME_LENGTH: number = 3;
const MIN_PRICE_VALUE: number = 1;

export default class ConsumableItemValidations extends BaseValidationClasses {
  consumableItem: ConsumableItemWithoutIdModel;

  constructor(consumableItem: ConsumableItemWithoutIdModel) {
    super();
    this.consumableItem = consumableItem;
  }

  validateData(): boolean {
    if (this.consumableItem.name.length < MIN_NAME_LENGTH) {
      this.showErrorToast(
        `O nome deve ter no mínimo ${MIN_NAME_LENGTH} letras.`
      );
      return false;
    }

    if (this.consumableItem.price < MIN_PRICE_VALUE) {
      this.showErrorToast(
        `O preço deve ser de no mínimo R$ ${MIN_PRICE_VALUE}.`
      );
      return false;
    }

    return true;
  }
}
