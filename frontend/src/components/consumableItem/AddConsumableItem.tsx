import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import FormTextInput from "../commom/FormTextInput";
import FormImage from "../commom/FormImage";
import FormCurrency from "../commom/FormCurrency";
import { addConsumableItem } from "../../requests/ConsumableItemRequests";
import {
  MIN_NAME_LENGTH,
  MIN_PRICE_VALUE,
} from "../../validations/consumableItemValidations";
import { ConsumableItemAddModel } from "../../models/ConsumableItemModel";

export default function AddConsumableItem() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File>();

  async function add(data: ConsumableItemAddModel) {
    try {
      const response = await addConsumableItem(data);
      console.log(response);
    } catch {
      //TODO: Make tratatives
    }
  }

  function handleAdd(): void {
    if (validateData() === false) return;

    const data: ConsumableItemAddModel = {
      name: name,
      price: price,
      description: description,
      image: image,
    };

    add(data);
  }

  function validateData(): boolean {
    if (name.length < MIN_NAME_LENGTH) {
      toast.error(`O nome deve ter no mínimo ${MIN_NAME_LENGTH} letras.`);
      return false;
    }

    if (price < MIN_PRICE_VALUE) {
      toast.error(`O preço deve ser de no mínimo R$ ${MIN_PRICE_VALUE}.`);
      return false;
    }

    return true;
  }

  return (
    <>
      <Toaster position="top-right" />
      <FormTextInput label="Nome" value={name} setValue={setName} />
      <FormCurrency label="Preço" value={price} setValue={setPrice} />
      <FormTextInput
        label="Descrição"
        value={description}
        setValue={setDescription}
      />
      <FormImage image={image} setImage={setImage} />
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}
