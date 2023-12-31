import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PageContainer from "../components/pages/PageContainer";
import PageTitle from "../components/pages/PageTitle";
import HandleAddButton from "../components/commom/HandleAddButton";
import DropDownAnimation from "../components/commom/DropDownAnimation";
import AddContainer from "../components/commom/AddContainer";
import AddRoom from "../components/room/AddRoom";
import RoomModel from "../models/RoomModel";
import EditCollapse from "../components/commom/EditCollapse";
import EditContainer from "../components/commom/EditContainer";
import EditContent from "../components/commom/EditContent";

export default function Room() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  const [rooms, setRooms] = useState<RoomModel[]>([]);

  function onAdd(addedRoom: RoomModel) {
    setOpenAdd(false);
    setRooms([addedRoom, ...rooms]);
    toast.success("Item adicionado !");
  }

  return (
    <>
      <Toaster position="top-right" />
      <PageContainer>
        <PageTitle title="Quartos" />
        <HandleAddButton isOpen={openAdd} setIsOpen={setOpenAdd} />
        <DropDownAnimation isOpen={openAdd} heightValue="auto">
          <AddContainer>
            <AddRoom onAdd={onAdd} />
          </AddContainer>
        </DropDownAnimation>
        <EditContainer>
          {rooms.map(
            (room: RoomModel, index: number) => (
              <EditCollapse key={room.id} title={room.number}>
                <EditContainer>
                  <EditContent>
                    {/* <EditConsumableItem
                      consumableItem={consumableItem}
                      index={index}
                      onEdit={onEdit}
                    /> */}
                  </EditContent>
                </EditContainer>
              </EditCollapse>
            )
          )}
        </EditContainer>
      </PageContainer>
    </>
  );
}
