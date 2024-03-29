import { useState } from "react";
import AccommodationModel from "../models/AccommodationModel";
import PageContainer from "../components/pages/PageContainer";
import PageTitle from "../components/pages/PageTitle";
import HandleAddButton from "../components/commom/HandleAddButton";
import DropDownAnimation from "../components/commom/DropDownAnimation";
import AddAccommodation from "../components/accommodation/AddAccommodation";
import AddContainer from "../components/commom/AddContainer";
import EditContainer from "../components/commom/EditContainer";
import EditCollapse from "../components/commom/EditCollapse";

import accommodationDumy from "../data/accommodationDumy";
import roomDumy from "../data/roomDumy";
import consumableItemDumy from "../data/consumableItemDumy";

export default function Accommodation() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  return (
    <PageContainer>
      <PageTitle title="Acomodações" />
      <HandleAddButton isOpen={openAdd} setIsOpen={setOpenAdd} />
      <DropDownAnimation isOpen={openAdd} heightValue="100%">
        <AddContainer>
          <AddAccommodation
            rooms={roomDumy}
            consumableItems={consumableItemDumy}
          />
        </AddContainer>
      </DropDownAnimation>

      <EditContainer>
        {accommodationDumy.map((accommodation: AccommodationModel) => (
          <EditCollapse key={accommodation.id} title={accommodation.alias}>
            <h1 className="bg-green-400">Testando</h1>
          </EditCollapse>
        ))}
      </EditContainer>
    </PageContainer>
  );
}
