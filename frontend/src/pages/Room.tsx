import { useState } from "react";
import PageContainer from "../components/pages/PageContainer";
import PageTitle from "../components/pages/PageTitle";
import HandleAddButton from "../components/commom/HandleAddButton";

export default function Room() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  return (
    <PageContainer>
      <PageTitle title="Quartos" />
      <HandleAddButton isOpen={openAdd} setIsOpen={setOpenAdd} />
    </PageContainer>
  );
}
