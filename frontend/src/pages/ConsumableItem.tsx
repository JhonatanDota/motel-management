import { useState, useEffect } from "react";

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

export default function ConsumableItem() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  const [consumableItems, setConsumableItems] = useState<ConsumableItemModel[]>(
    []
  );

  async function fetchConsumableItems() {
    try {
      const response = await getConsumableItems();
      setConsumableItems(response.data.results);
    } catch {
      //TODO: Make tratatives
    }
  }

  useEffect(() => {
    fetchConsumableItems();
  }, []);

  function onAdd() {}

  return (
    <PageContainer>
      <PageTitle title="Consumíveis" />
      <HandleAddButton isOpen={openAdd} setIsOpen={setOpenAdd} />
      <DropDownAnimation isOpen={openAdd} heightValue="100%">
        <AddContainer>
          <AddConsumableItem />
        </AddContainer>
      </DropDownAnimation>
      <EditContainer>
        {consumableItems.map((consumableItem: ConsumableItemModel) => (
          <EditCollapse title={consumableItem.name}>
            <EditContainer>
              <EditContent>
                <EditConsumableItem consumableItem={consumableItem} />
              </EditContent>
            </EditContainer>
          </EditCollapse>
        ))}
      </EditContainer>
    </PageContainer>
  );
}
