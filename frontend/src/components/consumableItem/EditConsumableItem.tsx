import { useState } from "react";
import ConsumableItemModel from "../../models/ConsumableItemModel";
import FormTextInput from "../commom/FormTextInput";
import FormCurrency from "../commom/FormCurrency";
import FormImage from "../commom/FormImage";

type EditConsumableItemProps = {
  consumableItem: ConsumableItemModel;
};

export default function EditConsumableItem(props: EditConsumableItemProps) {
  const { consumableItem } = props;

  const [name, setName] = useState<string>(consumableItem.name);
  const [price, setPrice] = useState<number>(consumableItem.price);
  const [description, setDescription] = useState<string>(
    consumableItem.description ?? ""
  );
  const [image, setImage] = useState<File | string | undefined>(
    consumableItem.image
  );

  return (
    <div className="flex flex-col gap-3">
      <FormTextInput label="Nome" value={name} setValue={setName} />
      <FormCurrency label="Preço" value={price} setValue={setPrice} />
      <FormTextInput
        label="Descrição"
        value={description}
        setValue={setDescription}
      />
      <FormImage image={image} setImage={setImage} />
    </div>
  );
}
