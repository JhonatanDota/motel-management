import { useState } from "react";

import PageContainer from "../components/pages/PageContainer";
import PageTitle from "../components/pages/PageTitle";
import DropDownAnimation from "../components/commom/DropDownAnimation";

export default function ConsumableItem() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  return (
    <PageContainer>
      <PageTitle title="Consumíveis" />
      <DropDownAnimation isOpen={openAdd} heightValue="100%">
        <h1></h1>
      </DropDownAnimation>
    </PageContainer>
  );
}
