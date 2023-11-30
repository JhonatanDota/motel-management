import { useState } from "react";
import FormInput from "../commom/FormInput";
import FormImage from "../commom/FormImage";

export default function AddConsumableItem() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  return (
    <>
      <FormInput label="Nome" value={name} setValue={setName} />
      <FormInput label="Preço" value={price} setValue={setPrice} />
      <FormInput
        label="Descrição"
        value={description}
        setValue={setDescription}
      />
      <FormImage image={image} setImage={setImage} />
    </>
  );
}
