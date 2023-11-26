import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";

type HandleAddButtonProps = {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
};

export default function HandleAddButton(props: HandleAddButtonProps) {
  const { isOpen, setIsOpen } = props;

  return (
    <button onClick={() => setIsOpen(!isOpen)} className="">
      {isOpen ? (
        <FaSquareMinus className="text-4xl" fill="red" />
      ) : (
        <FaSquarePlus className="text-4xl" fill="green" />
      )}
    </button>
  );
}
