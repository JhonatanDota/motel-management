import SubmitButton from "../commom/SubmitButton";
import RoomModel, { RoomWithoutIdModel } from "../../models/RoomModel";
import { editRoom } from "../../requests/roomRequests";
import InputsRoom from "./InputsRoom";
import { handleErrors } from "../../requests/handleErrors";

type EditRoomProps = {
  room: RoomModel;
  index: number;
  // onEdit: (index: number, room: RoomModel) => void;
};

export default function EditRoom(props: EditRoomProps) {
  const { room, index } = props;

  async function edit(room: RoomModel) {
    try {
      const response = await editRoom(room.id, room);

      // onEdit(index, response.data);
    } catch (error) {
      handleErrors(error);
    }
  }

  function handleEdit(data: RoomWithoutIdModel): void {
    edit({ id: room.id, ...data });
  }

  return (
    <>
      <InputsRoom
        room={room}
        onSubmit={handleEdit}
        disableSubmit={false}
        toResetFields={false}
        submitButton={
          <SubmitButton
            text="Editar"
            extraClasses="bg-[#ebc934] text-white w-full mt-2"
          />
        }
      />
    </>
  );
}
