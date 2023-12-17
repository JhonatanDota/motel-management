import { useState } from "react";
import ConsumableItemModel from "../../models/ConsumableItemModel";
import FormTextInput from "../commom/FormTextInput";
import FormCurrency from "../commom/FormCurrency";
import FormImage from "../commom/FormImage";
import ConfirmActionButton from "../commom/ConfirmActionButton";
import { MdEditSquare } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { editConsumableItem } from "../../requests/ConsumableItemRequests";
import ConsumableItemValidations from "../../validations/consumableItemValidations";

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

  // async function edit(data: ConsumableItemWithoutIdModel) {
  //   setIsAdding(true);

  //   try {
  //     const response = await addConsumableItem(data);
  //   } catch {
  //     //TODO: Make tratatives
  //   } finally {
  //     setIsAdding(false);
  //   }
  // }

  console.log(consumableItem)

  function handleEdit(): void {
    const data: ConsumableItemModel = {
      id: consumableItem.id,
      name: name,
      price: price,
      description: description,
      image: image,
    };

    const validator: ConsumableItemValidations = new ConsumableItemValidations(
      data
    );

    if (validator.validateData() === false) return;

    // add(data);
  }

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
      <ConfirmActionButton
        data-tooltip-id="edit-tooltip"
        content={<MdEditSquare fill="gold" />}
        classes="mx-auto mt-6 text-4xl md:text-6xl"
        onClick={handleEdit}
        disabled={false}
      />
      <Tooltip
        id="edit-tooltip"
        place="bottom"
        delayShow={20}
        delayHide={20}
        opacity={0.5}
        style={{ backgroundColor: "#F64E2B", fontWeight: "bold" }}
      />
    </div>
  );
}
