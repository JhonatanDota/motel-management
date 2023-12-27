import { ReactNode, useState } from "react";
import FormNumberInput from "../commom/FormNumberInput";
import FormCurrency from "../commom/FormCurrency";
import ConfirmActionButton from "../commom/ConfirmActionButton";
import { RoomWithoutIdModel } from "../../models/RoomModel";

type InputsRoomProps = {
  room?: RoomWithoutIdModel;
  submitButton: ReactNode;
  onSubmit: (room: RoomWithoutIdModel) => void;
  disableSubmit: boolean;
  toResetFields: boolean;
};

export default function InputsRoom(props: InputsRoomProps) {
  const { room, submitButton, onSubmit, disableSubmit, toResetFields } = props;

  const [number, setNumber] = useState<number>(room?.number ?? 0);
  const [hourValue, setHourValue] = useState<number>(room?.hour_value ?? 0);

  function handleSubmit(): void {
    let data: RoomWithoutIdModel = {
      number: number,
      hour_value: hourValue,
      type: "a",
    };

    onSubmit(data);

    if (toResetFields) resetFields();
  }

  function resetFields(): void {
    setNumber(0);
    setHourValue(0);
  }

  return (
    <>
      <FormNumberInput label="Número" value={number} setValue={setNumber} />
      <FormCurrency
        label="Valor Hora"
        value={hourValue}
        setValue={setHourValue}
      />
      <ConfirmActionButton
        content={submitButton}
        onClick={handleSubmit}
        disabled={disableSubmit}
      />
    </>
  );
}
