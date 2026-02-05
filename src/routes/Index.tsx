import { BrowserRouter, Route, Routes } from "react-router";
import LandingRoutes from "./LandingRoutes";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LandingRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
