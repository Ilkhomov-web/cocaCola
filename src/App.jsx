import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BrandsPage from "./pages/BrandsPage";
import SustainabilitiyPage from "./pages/SustainabilitiyPage";
import SocialPage from "./pages/SocialPage";
import ColaBrands from "./pages/ColaBrands";

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/sustainability" element={<SustainabilitiyPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/brands/:brand" element={<ColaBrands />} />
        {/* <Route path="/coca-cola" element={<ColaBrands />} />
        <Route path="/fanta" element={<ColaBrands />} /> */}
      </Routes>
    </>
  );
}

export default App;
