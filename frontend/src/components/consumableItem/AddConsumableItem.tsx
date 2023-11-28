import FormInput from "../commom/FormInput";

export default function AddConsumableItem(){
    return (
        <>
            <FormInput label="Nome" name="name"/>
            <FormInput label="Preço" name="price"/>
            <FormInput label="Descrição" name="description"/>
        </>
    );
}