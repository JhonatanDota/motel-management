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
import {
  getCurrentPage,
  getNextPage,
  getPreviousPage,
  getSearchParamByKey,
  getSearchParams,
} from "../functions/pagination";
import FiltersConsumableItem from "../components/consumableItem/FiltersConsumableItem";

export default function ConsumableItem() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const [consumableItems, setConsumableItems] = useState<ConsumableItemModel[]>(
    []
  );

  const [params, setParams] = useState<object>(getSearchParams(searchParams));

  const [currentPage, setCurrentPage] = useState<number | undefined>(
    getCurrentPage(searchParams)
  );
  const [previousPage, setPreviousPage] = useState<number>();
  const [nextPage, setNextPage] = useState<number>();

  async function fetchConsumableItems() {
    try {
      const response = await getConsumableItems(params, currentPage);
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
    setSearchParams({
      ...params,
      ...(currentPage && { "page[number]": currentPage.toString() }),
    });

    fetchConsumableItems();
  }, [currentPage, params]);

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
        <FiltersConsumableItem
          isOpen={openFilter}
          setIsOpen={setOpenFilter}
          params={params}
          setParams={setParams}
          searchParams={searchParams}
        />
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
          setCurrentPage={setCurrentPage}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </PageContainer>
    </>
  );
}
