import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BrandsPage from "./pages/BrandsPage";
import SustainabilitiyPage from "./pages/SustainabilitiyPage";

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/sustainability" element={<SustainabilitiyPage />} />
      </Routes>
    </>
  );
}

export default App;
