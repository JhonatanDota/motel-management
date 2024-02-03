import ConsumableItemModel, {
  ConsumableItemWithoutIdModel,
} from "../../models/ConsumableItemModel";
import { editConsumableItem } from "../../requests/consumableItemRequests";
import InputsConsumableItem from "./InputsConsumableItem";
import SubmitButton from "../commom/SubmitButton";
import { handleErrors } from "../../requests/handleErrors";

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
    } catch (error) {
      handleErrors(error);
    }
  }

  function handleEdit(data: ConsumableItemWithoutIdModel): void {
    edit({ id: consumableItem.id, ...data });
  }

  return (
    <>
      <InputsConsumableItem
        consumableItem={consumableItem}
        onSubmit={handleEdit}
        disableSubmit={false}
        toResetFields={false}
        submitButton={
          <SubmitButton
            text="Editar"
            extraClasses="bg-[#ebc934] text-white w-full mt-2"
          />
        }
      />
    </>
  );
}
