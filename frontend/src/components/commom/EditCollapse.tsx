import { ReactNode, useState } from "react";
import DropDownAnimation from "./DropDownAnimation";

type CollapseProps = {
  title: string;
  children: ReactNode;
};

export default function EditCollapse(props: CollapseProps) {
  const { title, children } = props;

  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4 bg-[#111827] p-4">
      <div onClick={() => setOpen(!isOpen)} className="cursor-pointer">
        <div className="flex justify-between">
          <p className="text-white font-bold">{title}</p>
        </div>
      </div>

      <DropDownAnimation isOpen={isOpen} heightValue="auto">
        {children}
      </DropDownAnimation>
    </div>
  );
}
