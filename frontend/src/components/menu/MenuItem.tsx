import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IconType } from "react-icons";

type MenuItemProps = {
  route: string;
  isMenuOpen: boolean;
  icon: IconType;
  title: string;
};

export default function MenuItem(props: MenuItemProps) {
  const { route, isMenuOpen, icon: Icon, title } = props;

  const location = useLocation();

  const [isHover, setIsHover] = useState<boolean>(false);
  const [isRouteActive, setIsRouteActive] = useState<boolean>(false);

  useEffect(() => {
    const actualLocationPath: string = location.pathname;

    setIsRouteActive(actualLocationPath === route);
  }, [location]);

  return (
    <>
      <NavLink className="flex flex-col gap-2 items-center" to={route}>
        <Icon
          data-tooltip-id="menu-tooltip"
          data-tooltip-content={title}
          className="text-3xl md:text-5xl transition-colors duration-150 outline-none"
          fill={isHover || isRouteActive ? "#F64E2B" : "white"}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />

        <p
          className={`text-base md:text-xl text-white font-bold transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {title}
        </p>
      </NavLink>
    </>
  );
}
