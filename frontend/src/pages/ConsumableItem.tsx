import { useState } from "react";

import PageContainer from "../components/pages/PageContainer";
import PageTitle from "../components/pages/PageTitle";
import HandleAddButton from "../components/commom/HandleAddButton";
import DropDownAnimation from "../components/commom/DropDownAnimation";
import AddContainer from "../components/commom/AddContainer";
import AddConsumableItem from "../components/consumableItem/AddConsumableItem";

export default function ConsumableItem() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  return (
    <PageContainer>
      <PageTitle title="Consumíveis" />
      <HandleAddButton isOpen={openAdd} setIsOpen={setOpenAdd} />
      <DropDownAnimation isOpen={openAdd} heightValue="100%">
        <AddContainer>
          <AddConsumableItem />
        </AddContainer>
      </DropDownAnimation>
    </PageContainer>
  );
}
