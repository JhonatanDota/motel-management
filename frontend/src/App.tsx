import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import Menu from "./components/menu/Menu";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    <BrowserRouter>
      <div className="flex">
        <Menu
          open={isOpen}
          setOpen={setIsOpen}
          isMobile={isMobile}
          setIsMobile={setIsMobile}
        />
        <div
          className={`flex flex-col mx-auto my-8 transition-all duration-150 ${
            isMobile ? `${isOpen ? "w-[80%] p-4" : "w-full p-4"}` : "w-[55%] p-6"
          }`}
        >
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
