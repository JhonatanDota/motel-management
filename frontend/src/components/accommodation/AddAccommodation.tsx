import ConsumableItemModel from "../../models/ConsumableItemModel";
import RoomModel from "../../models/RoomModel";
import FormSelect from "../commom/FormSelect";
import FormTextInput from "../commom/FormTextInput";

type AddAccommodationProps = {
  rooms: RoomModel[];
  consumableItems: ConsumableItemModel[];
};

export default function AddAccommodation(props: AddAccommodationProps) {
  const { rooms, consumableItems } = props;

  return (
    <>
      <FormSelect
        label="Quarto"
        options={
          <>
            {rooms.map((room: RoomModel) => (
              <option value={room.id}>{room.number}</option>
            ))}
          </>
        }
      />

      {/* <FormTextInput label="Apelido" /> */}

      <FormSelect
        label="Consumíveis"
        options={
          <>
            {consumableItems.map((consumableItem: ConsumableItemModel) => (
              <option value={consumableItem.id}>{consumableItem.name}</option>
            ))}
          </>
        }
      />
    </>
  );
}
