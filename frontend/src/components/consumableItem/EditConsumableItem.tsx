import { useState } from "react";
import ConsumableItemModel from "../../models/ConsumableItemModel";
import FormTextInput from "../commom/FormTextInput";
import FormCurrency from "../commom/FormCurrency";
import FormImage from "../commom/FormImage";
import ConfirmActionButton from "../commom/ConfirmActionButton";
import { editConsumableItem } from "../../requests/ConsumableItemRequests";
import ConsumableItemValidations from "../../validations/consumableItemValidations";
import SubmitButton from "../commom/SubmitButton";

type EditConsumableItemProps = {
  consumableItem: ConsumableItemModel;
  index: number;
  onFinishEdit: (index: number, consumableItem: ConsumableItemModel) => void;
};

export default function EditConsumableItem(props: EditConsumableItemProps) {
  const { consumableItem, index, onFinishEdit } = props;

  const [name, setName] = useState<string>(consumableItem.name);
  const [price, setPrice] = useState<number>(consumableItem.price);
  const [description, setDescription] = useState<string>(
    consumableItem.description ?? ""
  );
  const [image, setImage] = useState<File | string | null>(
    consumableItem.image
  );

  async function edit(consumableItem: ConsumableItemModel) {
    try {
      const response = await editConsumableItem(
        consumableItem.id,
        consumableItem
      );

      onFinishEdit(index, response.data);
    } catch {
      //TODO: Make tratatives
    }
  }

  function handleEdit(): void {
    const data: ConsumableItemModel = {
      id: consumableItem.id,
      name: name,
      price: price,
      description: description,
      image: image ?? "",
    };

    const validator: ConsumableItemValidations = new ConsumableItemValidations(
      data
    );

    if (validator.validateData() === false) return;

    edit(data);
  }

  return (
    <>
      <FormTextInput label="Nome" value={name} setValue={setName} />
      <FormCurrency label="Preço" value={price} setValue={setPrice} />
      <FormTextInput
        label="Descrição"
        value={description}
        setValue={setDescription}
      />
      <FormImage image={image} setImage={setImage} />
      <ConfirmActionButton
        content={
          <SubmitButton text="Editar" extraClasses="bg-[#ebc934] text-white" />
        }
        classes="mx-auto text-4xl md:text-6xl"
        onClick={handleEdit}
        disabled={false}
      />
    </>
  );
}
