import { ReactNode, useState } from "react";
import FormNumberInput from "../commom/FormNumberInput";
import FormCurrency from "../commom/FormCurrency";
import ConfirmActionButton from "../commom/ConfirmActionButton";
import { RoomWithoutIdModel } from "../../models/RoomModel";
import FormSelect from "../commom/FormSelect";
import { RoomTypeEnum } from "../../data/RoomData";
import RoomValidations from "../../validations/roomValidations";

type InputsRoomProps = {
  room?: RoomWithoutIdModel;
  submitButton: ReactNode;
  onSubmit: (room: RoomWithoutIdModel, onSuccess: () => void) => void;
  disableSubmit: boolean;
  toResetFields: boolean;
};

export default function InputsRoom(props: InputsRoomProps) {
  const { room, submitButton, onSubmit, disableSubmit, toResetFields } = props;

  const [number, setNumber] = useState<number>(room?.number ?? 0);
  const [hourValue, setHourValue] = useState<number>(room?.hour_value ?? 0);
  const [type, setType] = useState<string>(room?.type ?? "");

  function handleSubmit(): void {
    let data: RoomWithoutIdModel = {
      number: number,
      hour_value: hourValue,
      type: type,
    };

    const validator: RoomValidations = new RoomValidations(data);

    if (validator.validateData() === false) return;

    onSubmit(data, () => {
      if (toResetFields) resetFields();
    });
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
      <FormSelect label="Tipo" value={type} setValue={setType}>
        {Object.entries(RoomTypeEnum).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </FormSelect>
      <ConfirmActionButton
        content={submitButton}
        onClick={handleSubmit}
        disabled={disableSubmit}
      />
    </>
  );
}
