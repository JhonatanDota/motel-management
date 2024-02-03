import { useState } from "react";
import InputsRoom from "./InputsRoom";
import SubmitButton from "../commom/SubmitButton";
import RoomModel, { RoomWithoutIdModel } from "../../models/RoomModel";
import { addRoom } from "../../requests/roomRequests";
import { handleErrors } from "../../requests/handleErrors";

type AddRoomProps = {
  onAdd: (addedRoom: RoomModel) => void;
};

export default function AddRoom(props: AddRoomProps) {
  const { onAdd } = props;

  const [isAdding, setIsAdding] = useState<boolean>(false);

  async function add(data: RoomWithoutIdModel, onSuccess: () => void) {
    setIsAdding(true);

    try {
      const response = await addRoom(data);

      onAdd(response.data);
      onSuccess();
    } catch (err) {
      handleErrors(err);
    } finally {
      setIsAdding(false);
    }
  }

  return (
    <>
      <InputsRoom
        submitButton={
          <SubmitButton
            text="Adicionar"
            extraClasses="bg-[#6bb120] text-white w-full mt-2"
          />
        }
        onSubmit={add}
        disableSubmit={isAdding}
        toResetFields={true}
      />
    </>
  );
}
