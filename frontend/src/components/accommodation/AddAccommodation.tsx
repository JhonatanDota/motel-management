import ConsumableItemModel from "../../models/ConsumableItemModel";
import RoomModel from "../../models/RoomModel";

type AddAccommodationProps = {
  rooms: RoomModel[];
  consumableItems: ConsumableItemModel[];
};

export default function AddAccommodation(props: AddAccommodationProps) {
  const { rooms, consumableItems } = props;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <label className="font-bold">Quarto</label>
        <select className="rounded-md bg-gray-200 text-black p-3">
          <option value="">Selecione</option>
          {rooms.map((room: RoomModel) => (
            <option value={room.id}>{room.number}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <label className="font-bold">Consumíveis</label>
        <select className="rounded-md bg-gray-200 text-black p-3">
          {consumableItems.map((consumableItem: ConsumableItemModel) => (
            <option value={consumableItem.id}>{consumableItem.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <label className="font-bold">Apelido</label>
        <input className="rounded-md bg-gray-200 text-black p-2" type="text" />
      </div>

      <div className="flex flex-col gap-3">
        <label className="font-bold">Apelido</label>
        <input className="rounded-md bg-gray-200 text-black p-2" type="text" />
      </div>
    </div>
  );
}
