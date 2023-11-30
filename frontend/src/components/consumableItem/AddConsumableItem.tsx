import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import FormInput from "../commom/FormInput";
import FormImage from "../commom/FormImage";
import { addConsumableItem } from "../../requests/ConsumableItemRequests";
import { MIN_NAME_LENGTH } from "../../validations/consumableItemValidations";

export default function AddConsumableItem() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  async function add() {}

  function validateData(): boolean {
    if (name.length < MIN_NAME_LENGTH) {
      toast.error(`Nome deve ter no mínimo ${MIN_NAME_LENGTH} letras.`);
      return false;
    }

    
    return false;
  }

  return (
    <>
      <Toaster position="top-right"/>
      <FormInput label="Nome" value={name} setValue={setName} />
      <FormInput label="Preço" value={price} setValue={setPrice} />
      <FormInput
        label="Descrição"
        value={description}
        setValue={setDescription}
      />
      <FormImage image={image} setImage={setImage} />
      <button onClick={validateData}>Adicionar</button>
    </>
  );
}
