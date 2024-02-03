import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  getCurrentPage,
  getNextPage,
  getPreviousPage,
} from "../functions/pagination";
import { PaginationModel } from "../models/RequestModel";
import PageContainer from "../components/pages/PageContainer";
import PageTitle from "../components/pages/PageTitle";
import HandleAddButton from "../components/commom/HandleAddButton";
import DropDownAnimation from "../components/commom/DropDownAnimation";
import AddContainer from "../components/commom/AddContainer";
import AddRoom from "../components/room/AddRoom";
import { getRooms } from "../requests/roomRequests";
import RoomModel from "../models/RoomModel";
import EditCollapse from "../components/commom/EditCollapse";
import EditContainer from "../components/commom/EditContainer";
import EditContent from "../components/commom/EditContent";
import EditRoom from "../components/room/EditRoom";

export default function Room() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [rooms, setRooms] = useState<RoomModel[]>([]);

  const [currentPage, setCurrentPage] = useState<number | undefined>(
    getCurrentPage(searchParams)
  );
  const [previousPage, setPreviousPage] = useState<number>();
  const [nextPage, setNextPage] = useState<number>();

  useEffect(() => {
    fetchRooms();
  }, []);

  async function fetchRooms() {
    try {
      const response = await getRooms({}, currentPage);
      const pagination: PaginationModel = response.data.meta.pagination;
      const results: RoomModel[] = response.data.results;

      setPreviousPage(getPreviousPage(pagination.page));
      setNextPage(getNextPage(pagination.page, pagination.pages));

      setRooms(results);
    } catch (error) {
      //TODO: add best tratative
    } finally {
      // setIsFetching(false);
    }
  }

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
          {rooms.map((room: RoomModel, index: number) => (
            <EditCollapse key={room.id} title={room.number}>
              <EditContainer>
                <EditContent>
                  <EditRoom
                      room={room}
                      index={index}
                      // onEdit={onEdit}
                    />
                </EditContent>
              </EditContainer>
            </EditCollapse>
          ))}
        </EditContainer>
      </PageContainer>
    </>
  );
}
