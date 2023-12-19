import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Links } from "../models/RequestModel";
import ConsumableItemModel from "../models/ConsumableItemModel";
import PageContainer from "../components/pages/PageContainer";
import PageTitle from "../components/pages/PageTitle";
import HandleAddButton from "../components/commom/HandleAddButton";
import DropDownAnimation from "../components/commom/DropDownAnimation";
import AddContainer from "../components/commom/AddContainer";
import AddConsumableItem from "../components/consumableItem/AddConsumableItem";
import EditContainer from "../components/commom/EditContainer";
import EditCollapse from "../components/commom/EditCollapse";
import EditContent from "../components/commom/EditContent";
import EditConsumableItem from "../components/consumableItem/EditConsumableItem";

import { getConsumableItems } from "../requests/ConsumableItemRequests";
import EditContainerSkeleton from "../components/skeleton/EditContainerSkeleton";
import Pagination from "../components/pagination/Pagination";

export default function ConsumableItem() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const [consumableItems, setConsumableItems] = useState<ConsumableItemModel[]>(
    []
  );

  async function fetchConsumableItems(
    url?: string
  ): Promise<Links | undefined> {
    let links: Links | undefined;

    try {
      const response = await getConsumableItems(url);
      const results: ConsumableItemModel[] = response.data.results;
      links = response.data.links;

      setConsumableItems(results);
    } catch {
      //TODO: Make tratatives
    } finally {
      setIsFetching(false);
    }

    return links;
  }

  function onAdd(addedConsumableItem: ConsumableItemModel) {
    setOpenAdd(false);
    setConsumableItems([addedConsumableItem, ...consumableItems]);
    toast.success("Item adicionado !");
  }

  function onEdit(index: number, consumableItem: ConsumableItemModel) {
    const updatedConsumableItems: ConsumableItemModel[] = [...consumableItems];

    updatedConsumableItems[index] = consumableItem;
    setConsumableItems(updatedConsumableItems);
    toast.success("Item Atualizado");
  }

  return (
    <>
      <Toaster position="top-right" />
      <PageContainer>
        <PageTitle title="Consumíveis" />
        <HandleAddButton isOpen={openAdd} setIsOpen={setOpenAdd} />
        <DropDownAnimation isOpen={openAdd} heightValue="100%">
          <AddContainer>
            <AddConsumableItem onAdd={onAdd} />
          </AddContainer>
        </DropDownAnimation>
        <EditContainer>
          {isFetching ? (
            <EditContainerSkeleton />
          ) : (
            consumableItems.map(
              (consumableItem: ConsumableItemModel, index: number) => (
                <EditCollapse
                  key={consumableItem.id}
                  title={consumableItem.name}
                >
                  <EditContainer>
                    <EditContent>
                      <EditConsumableItem
                        consumableItem={consumableItem}
                        index={index}
                        onEdit={onEdit}
                      />
                    </EditContent>
                  </EditContainer>
                </EditCollapse>
              )
            )
          )}
        </EditContainer>
        <Pagination requestFunc={fetchConsumableItems} />
      </PageContainer>
    </>
  );
}
