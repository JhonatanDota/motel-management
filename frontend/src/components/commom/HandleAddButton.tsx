import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";

type HandleAddButtonProps = {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
};

export default function HandleAddButton(props: HandleAddButtonProps) {
  const { isOpen, setIsOpen } = props;

  return (
    <button onClick={() => setIsOpen(!isOpen)} className="text-4xl md:text-5xl">
      {isOpen ? <FaSquareMinus fill="red" /> : <FaSquarePlus fill="green" />}
    </button>
  );
}
