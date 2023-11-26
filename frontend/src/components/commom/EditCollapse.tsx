import { ReactNode, useState } from "react";
import DropDownAnimation from "./DropDownAnimation";
import { FaCaretUp } from "react-icons/fa6";

type CollapseProps = {
  title: string;
  children: ReactNode;
};

export default function EditCollapse(props: CollapseProps) {
  const { title, children } = props;

  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col bg-[#111827] p-4 transition-all duration-300 ${
        isOpen ? "gap-4" : "gap-0"
      }`}
    >
      <div
        onClick={() => setOpen(!isOpen)}
        className="flex justify-between cursor-pointer"
      >
        <div className="flex justify-between">
          <p className="text-white font-bold">{title}</p>
        </div>
        <button
          className={`text-2xl text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <FaCaretUp />
        </button>
      </div>

      <DropDownAnimation isOpen={isOpen} heightValue="auto">
        {children}
      </DropDownAnimation>
    </div>
  );
}
