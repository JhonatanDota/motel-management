import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

import { TiThMenu } from "react-icons/ti";

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

  const [isMobile, setIsMobile] = useState<boolean>(true);

  function handleWindowSizeChange(): void {
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div
      className={`flex flex-col items-center bg-[#111827] h-screen transition-all duration-200 py-12 ${
        isMobile && !open
          ? "w-0 px-0 max-w-0 overflow-hidden"
          : `sticky top-0 px-7 ${open ? "w-20 md:w-24" : "w-12 md:w-16"}`
      }`}
    >
      {isMobile ? (
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-3 top-3 text-2xl"
        >
          <TiThMenu fill={`${open ? "white" : "black"}`} />
        </button>
      ) : (
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-2 -right-4 md:-right-5 text-3xl md:text-4xl"
        >
          {open ? <FaCaretLeft fill="red" /> : <FaCaretRight fill="red" />}
        </button>
      )}

      <div className="flex flex-col gap-y-10 md:gap-y-20 mt-8 max-w-full">
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
