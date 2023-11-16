import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddAccommodation from "./pages/AddAccommodation";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-accommodation" element={<AddAccommodation />} />
      </Routes>
    </BrowserRouter>
  );
}
