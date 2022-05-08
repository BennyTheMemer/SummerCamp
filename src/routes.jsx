import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home } from "./views";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
