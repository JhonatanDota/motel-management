import { ReactNode } from "react";
import DropDownAnimation from "../commom/DropDownAnimation";
import { FaCaretUp } from "react-icons/fa6";

type FilterProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
};

export default function FilterContainer(props: FilterProps) {
  const { isOpen, setIsOpen, children } = props;

  return (
    <div className="w-full">
      <div
        className="flex justify-between py-2 px-4 md:py-4 md:px-6 bg-[#F64E2B] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base md:text-2xl text-[#111827] font-bold">
          Filtros
        </h3>
        <button
          className={`text-xl md:text-2xl text-white transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        >
          <FaCaretUp />
        </button>
      </div>
      <DropDownAnimation isOpen={isOpen} heightValue="auto">
        <div className="p-3">{children}</div>
      </DropDownAnimation>
    </div>
  );
}
