import React from "react";
import Navbar from "../components/Navbar";
import OurBrands from "../components/OurBrands";
import Footer from "../components/Footer";

function BrandsPage() {
  return (
    <div>
      <Navbar />
      <OurBrands marginTop={"100px"} display={"none"} />
      <Footer />
    </div>
  );
}

export default BrandsPage;
