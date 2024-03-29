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
  isMobile: boolean;
};

export default function Menu(props: MenuProps) {
  const { open, setOpen, isMobile } = props;

  return (
    <div
      className={`flex flex-col items-center sticky top-0 bg-[#111827] h-screen transition-all duration-200 py-12 ${isMobile && !open
          ? "w-0 px-0 max-w-0 overflow-hidden"
          : `px-7 ${open ? "w-20 md:w-24" : "w-12 md:w-20"}`
        }`}
    >
      {isMobile && (
        <button
          onClick={() => setOpen(!open)}
          className="fixed right-3 top-3 text-2xl z-10"
        >
          <TiThMenu fill="red" />
        </button>
      )}

      <div className="flex flex-col justify-around h-full max-w-full">
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
