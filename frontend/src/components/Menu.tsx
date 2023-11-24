import MenuItem from "./MenuItem";

import {
  FaCaretRight,
  FaCaretLeft,
  FaHouse,
  FaClipboardUser,
  FaBed,
  FaBasketShopping,
} from "react-icons/fa6";

type MenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export default function Menu(props: MenuProps) {
  const { open, setOpen } = props;

  return (
    <div
      className={`${
        open ? "w-20" : "w-12"
      } flex flex-col items-center bg-[#111827] h-screen sticky top-0 px-7 py-12 transition-all duration-200`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-2 -right-4 text-3xl"
      >
        {open ? <FaCaretLeft fill="red" /> : <FaCaretRight fill="red" />}
      </button>

      <div className="flex flex-col gap-y-10 mt-8 max-w-full">
        <MenuItem route="/" isMenuOpen={open} icon={FaHouse} title="Início" />

        <MenuItem
          route="/accommodation"
          isMenuOpen={open}
          icon={FaClipboardUser}
          title="Estada"
        />

        <MenuItem route="/room" isMenuOpen={open} icon={FaBed} title="Quarto" />

        <MenuItem
          route="/consumable-item"
          isMenuOpen={open}
          icon={FaBasketShopping}
          title="Item"
        />
      </div>
    </div>
  );
}
