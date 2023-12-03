import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import FormTextInput from "../commom/FormTextInput";
import FormImage from "../commom/FormImage";
import FormCurrency from "../commom/FormCurrency";
import { addConsumableItem } from "../../requests/ConsumableItemRequests";
import { ConsumableItemWithoutIdModel } from "../../models/ConsumableItemModel";
import ConfirmActionButton from "../commom/ConfirmActionButton";
import { FaCirclePlus } from "react-icons/fa6";
import ConsumableItemValidations from "../../validations/consumableItemValidations";

export default function AddConsumableItem() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [isAdding, setIsAdding] = useState<boolean>(false);

  async function add(data: ConsumableItemWithoutIdModel) {
    setIsAdding(true);

    try {
      const response = await addConsumableItem(data);

      resetData();
      toast.success("Item adicionado !");
    } catch {
      //TODO: Make tratatives
    } finally {
      setIsAdding(false);
    }
  }

  function handleAdd(): void {
    const data: ConsumableItemWithoutIdModel = {
      name: name,
      price: price,
      description: description,
      image: image,
    };

    const validator: ConsumableItemValidations = new ConsumableItemValidations(
      data
    );
    if (validator.validateData() === false) return;

    add(data);
  }

  function resetData(): void {
    setName("");
    setPrice(0);
    setDescription("");
    setImage(undefined);
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
      <ConfirmActionButton
        content={<FaCirclePlus fill="green" />}
        classes="m-auto text-4xl"
        onClick={handleAdd}
        disabled={isAdding}
      />
    </>
  );
}
