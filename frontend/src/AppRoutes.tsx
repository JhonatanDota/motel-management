import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Accommodation from "./pages/Accommodation";
import Room from "./pages/Room";
import ConsumableItem from "./pages/ConsumableItem";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/room" element={<Room />} />
        <Route path="/consumable-item" element={<ConsumableItem />} />
      </Routes>
    </BrowserRouter>
  );
}
