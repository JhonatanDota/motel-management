import FormInput from "../commom/FormInput";
import FormImage from "../commom/FormImage";

export default function AddConsumableItem() {
  return (
    <>
      <FormInput label="Nome" name="name" />
      <FormInput label="Preço" name="price" />
      <FormInput label="Descrição" name="description" />
      <FormImage />
    </>
  );
}
