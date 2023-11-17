import { useState } from "react";
import AccommodationModel from "../models/AccommodationModel";
import AddAccommodation from "../components/accommodation/AddAccommodation";
import Add from "../components/Add";
import Collapse from "../components/Collapse";

import accommodationDumy from "../data/accommodationDumy";
import roomDumy from "../data/roomDumy";
import consumableItemDumy from "../data/consumableItemDumy";

export default function Accommodation() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-3xl font-bold tracking-wider">Acomodações</h1>
      <button onClick={() => setOpenAdd(!openAdd)} className="p-4 bg-green-300">
        +
      </button>

      {openAdd && (
        <div className="w-full">
          <Add children={<AddAccommodation rooms={roomDumy} consumableItems={consumableItemDumy}/>}/>
        </div>
      )}

      <div className="flex flex-col gap-3 w-full">
        {
          accommodationDumy.map((accommodation: AccommodationModel) => (
            <Collapse title={accommodation.alias} children={<h1>Testando</h1>}/>
          ))
        }
      </div>
    </div>
  );
}
