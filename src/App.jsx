import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BrandsPage from "./pages/BrandsPage";
import SustainabilitiyPage from "./pages/SustainabilitiyPage";
import SocialPage from "./pages/SocialPage";

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/sustainability" element={<SustainabilitiyPage />} />
        <Route path="/social" element={<SocialPage />} />
      </Routes>
    </>
  );
}

export default App;
