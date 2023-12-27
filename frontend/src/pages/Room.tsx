import { useState } from "react";
import PageContainer from "../components/pages/PageContainer";
import PageTitle from "../components/pages/PageTitle";
import HandleAddButton from "../components/commom/HandleAddButton";
import DropDownAnimation from "../components/commom/DropDownAnimation";
import AddContainer from "../components/commom/AddContainer";
import AddRoom from "../components/room/AddRoom";

export default function Room() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  return (
    <PageContainer>
      <PageTitle title="Quartos" />
      <HandleAddButton isOpen={openAdd} setIsOpen={setOpenAdd} />
      <DropDownAnimation isOpen={openAdd} heightValue="100%">
        <AddContainer>
          <AddRoom />
        </AddContainer>
      </DropDownAnimation>
    </PageContainer>
  );
}
