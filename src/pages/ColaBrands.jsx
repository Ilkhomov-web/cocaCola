import { Container, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import React, { useEffect } from "react";
import CocaColaBrandHeader from "../components/CocaColaBrandHeader";
import BrandsCard from "../components/BrandsCard";
import BrandsData from "../data/Brands";
import { useParams } from "react-router-dom";
import BrandHistory from "../components/BrandHistory";
import AOS from "aos";
import "aos/dist/aos.css";

function ColaBrands(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const { brand } = useParams();
  const brandData = BrandsData.find(
    (item) => item.brandPageName.toLowerCase().replace(/\s/g, "-") === brand
  );

  console.log(brandData, "elkas");

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <CocaColaBrandHeader brandData={brandData} />
        <Typography
          data-aos="fade-down"
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "bold", margin: "50px 0px" }}
        >
          Mahsulotlar
        </Typography>
      </Container>
      <BrandsCard brandData={brandData} />
      <BrandHistory brandData={brandData} />
    </div>
  );
}

export default ColaBrands;
