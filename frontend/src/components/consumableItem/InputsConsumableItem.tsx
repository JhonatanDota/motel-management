import { ReactNode, useState } from "react";
import FormCurrency from "../commom/FormCurrency";
import FormImage from "../commom/FormImage";
import FormTextInput from "../commom/FormTextInput";
import { ConsumableItemWithoutIdModel } from "../../models/ConsumableItemModel";
import ConfirmActionButton from "../commom/ConfirmActionButton";
import ConsumableItemValidations from "../../validations/consumableItemValidations";

type InputsConsumableItemProps = {
  consumableItem?: ConsumableItemWithoutIdModel;
  submitButton: ReactNode;
  onSubmit: (consumableItem: ConsumableItemWithoutIdModel) => void;
  disableSubmit: boolean;
  toResetFields: boolean;
};

export default function InputsConsumableItem(props: InputsConsumableItemProps) {
  const {
    consumableItem,
    submitButton,
    onSubmit,
    disableSubmit,
    toResetFields,
  } = props;

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

    const validator: ConsumableItemValidations = new ConsumableItemValidations(
      data
    );
    if (validator.validateData() === false) return;

    onSubmit(data);
    if (toResetFields) resetFields();
  }

  function resetFields(): void {
    setName("");
    setPrice(0);
    setDescription("");
    setImage(null);
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
        content={submitButton}
        onClick={handleSubmit}
        disabled={disableSubmit}
      />
    </>
  );
}
