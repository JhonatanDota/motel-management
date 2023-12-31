import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
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
import { PaginationModel } from "../models/RequestModel";
import { getNextPage, getPreviousPage } from "../functions/pagination";

export default function ConsumableItem() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const [consumableItems, setConsumableItems] = useState<ConsumableItemModel[]>(
    []
  );

  const [params, setParams] = useState<object>(searchParams);
  const [previousPage, setPreviousPage] = useState<number>();
  const [nextPage, setNextPage] = useState<number>();

  async function fetchConsumableItems() {
    try {
      const response = await getConsumableItems(params);
      const pagination: PaginationModel = response.data.meta.pagination;
      const results: ConsumableItemModel[] = response.data.results;

      setPreviousPage(getPreviousPage(pagination.page));
      setNextPage(getNextPage(pagination.page, pagination.pages));

      setConsumableItems(results);
    } catch (error) {
      //TODO: add best tratative
    } finally {
      setIsFetching(false);
    }
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

  useEffect(() => {
    fetchConsumableItems();
  }, [params]);

  return (
    <>
      <Toaster position="top-right" />
      <PageContainer>
        <PageTitle title="Consumíveis" />
        <HandleAddButton isOpen={openAdd} setIsOpen={setOpenAdd} />
        <DropDownAnimation isOpen={openAdd} heightValue="auto">
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
        <Pagination
          previousPage={previousPage}
          nextPage={nextPage}
          params={params}
          setParams={setParams}
          setSearchParams={setSearchParams}
        />
      </PageContainer>
    </>
  );
}
