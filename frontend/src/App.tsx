import { useState } from "react";
import AppRoutes from "./AppRoutes";
import Menu from "./components/Menu";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex">
      <Menu open={open} setOpen={setOpen} />
      <div
        className={`flex flex-col m-auto w-[70%] my-4 py-6 transition-all duration-150`}
      >
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
