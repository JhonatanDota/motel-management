import { useState } from "react";
import FormCurrency from "../commom/FormCurrency";
import FormImage from "../commom/FormImage";
import FormTextInput from "../commom/FormTextInput";
import { ConsumableItemWithoutIdModel } from "../../models/ConsumableItemModel";
import ConfirmActionButton from "../commom/ConfirmActionButton";
import SubmitButton from "../commom/SubmitButton";

type InputsConsumableItemProps = {
  consumableItem?: ConsumableItemWithoutIdModel;
  onSubmit: (consumableItem: ConsumableItemWithoutIdModel) => void;
};

export default function InputsConsumableItem(props: InputsConsumableItemProps) {
  const { consumableItem, onSubmit } = props;

  const [name, setName] = useState<string>(consumableItem?.name ?? "");
  const [price, setPrice] = useState<number>(consumableItem?.price ?? 0);
  const [description, setDescription] = useState<string>(
    consumableItem?.description ?? ""
  );
  const [image, setImage] = useState<File | string | null>(
    consumableItem?.image ?? null
  );

  function handleSubmit(): void {
    let data: ConsumableItemWithoutIdModel = {
      name: name,
      price: price,
      description: description,
      image: image ?? "",
    };

    onSubmit(data);
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
        onClick={handleSubmit}
        disabled={false}
      />
    </>
  );
}
