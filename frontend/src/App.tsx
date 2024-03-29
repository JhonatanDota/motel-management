import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import Menu from "./components/menu/Menu";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  function handleWindowSizeChange(): void {
    const isMobile: boolean = window.innerWidth <= 768;

    setIsMobile(isMobile);
    setIsOpen(!isMobile);
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
        <Menu open={isOpen} setOpen={setIsOpen} isMobile={isMobile} />
        <div
          className={`flex flex-col m-auto my-4 py-6 transition-all duration-150 ${
            isMobile ? `${isOpen ? "w-[70%]" : "w-full p-2"}` : "w-[50%]"
          }`}
        >
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
