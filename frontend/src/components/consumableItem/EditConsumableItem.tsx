import ConsumableItemModel, {
  ConsumableItemWithoutIdModel,
} from "../../models/ConsumableItemModel";
import { editConsumableItem } from "../../requests/ConsumableItemRequests";
import ConsumableItemValidations from "../../validations/consumableItemValidations";
import InputsConsumableItem from "./InputsConsumableItem";

type EditConsumableItemProps = {
  consumableItem: ConsumableItemModel;
  index: number;
  onEdit: (index: number, consumableItem: ConsumableItemModel) => void;
};

export default function EditConsumableItem(props: EditConsumableItemProps) {
  const { consumableItem, index, onEdit } = props;

  async function edit(consumableItem: ConsumableItemModel) {
    try {
      const response = await editConsumableItem(
        consumableItem.id,
        consumableItem
      );

      onEdit(index, response.data);
    } catch {
      //TODO: Make tratatives
    }
  }

  function handleEdit(data: ConsumableItemWithoutIdModel): void {
    const validator: ConsumableItemValidations = new ConsumableItemValidations(
      data
    );

    if (validator.validateData() === false) return;

    edit({ id: consumableItem.id, ...data });
  }

  return (
    <>
      <InputsConsumableItem
        consumableItem={consumableItem}
        onSubmit={handleEdit}
      />
    </>
  );
}
