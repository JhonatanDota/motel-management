import { NavLink } from "react-router-dom";
import { IconType } from "react-icons";

type MenuItemProps = {
  route: string;
  isMenuOpen: boolean;
  icon: IconType;
  title: string;
};

export default function MenuItem(props: MenuItemProps) {
  const { route, isMenuOpen, icon: Icon, title } = props;

  return (
    <NavLink className="flex flex-col gap-2 items-center" to={route}>
      <Icon className="text-3xl" fill="white" />

      <p
        className={`text-base text-white font-bold transition-opacity ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {title}
      </p>
    </NavLink>
  );
}
