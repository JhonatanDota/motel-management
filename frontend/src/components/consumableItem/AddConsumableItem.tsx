import { useState } from "react";
import { addConsumableItem } from "../../requests/consumableItemRequests";
import ConsumableItemModel, {
  ConsumableItemWithoutIdModel,
} from "../../models/ConsumableItemModel";
import InputsConsumableItem from "./InputsConsumableItem";
import SubmitButton from "../commom/SubmitButton";

type AddConsumableItemProps = {
  onAdd: (addedConsumableItem: ConsumableItemModel) => void;
};

export default function AddConsumableItem(props: AddConsumableItemProps) {
  const { onAdd } = props;

  const [isAdding, setIsAdding] = useState<boolean>(false);

  async function add(data: ConsumableItemWithoutIdModel) {
    setIsAdding(true);

    try {
      const response = await addConsumableItem(data);

      onAdd(response.data);
    } catch (error) {
      //TODO: Make tratatives
    } finally {
      setIsAdding(false);
    }
  }

  return (
    <>
      <InputsConsumableItem
        submitButton={
          <SubmitButton
            text="Adicionar"
            extraClasses="bg-[#6bb120] text-white w-full md:w-2/3 mt-2"
          />
        }
        onSubmit={add}
        disableSubmit={isAdding}
        toResetFields={true}
      />
    </>
  );
}
