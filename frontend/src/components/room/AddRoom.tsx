import { useState } from "react";
import InputsRoom from "./InputsRoom";
import SubmitButton from "../commom/SubmitButton";

export default function AddRoom() {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  return (
    <>
      <InputsRoom
        submitButton={
          <SubmitButton
            text="Adicionar"
            extraClasses="bg-[#6bb120] text-white w-full mt-2"
          />
        }
        onSubmit={() => {}}
        disableSubmit={isAdding}
        toResetFields={true}
      />
    </>
  );
}
