import React from "react";
import Navbar from "../components/Navbar";
import Swipper from "../components/Swipper";
import LeftWhiteContentCard from "../components/LeftWhiteContentCard";
import RightWhiteContentCard from "../components/RightWhiteContentCard";
import OurBrands from "../components/OurBrands";

function HomePage(props) {
  return (
    <div>
      <Navbar />
      <Swipper />
      {/* left and right content components */}
      <LeftWhiteContentCard
        pageTitle={"Global ta'sir"}
        conTitle={"IJTIMOIY LOYIHALARIMIZ"}
        conDescription={
          "Coca-Cola kompaniyasining O'zbekistondagi istiqbollari va barqaror rivojlanish loyihalari haqida ma'lumot."
        }
        conImgPath={"/public/data1.webp"}
        conLink={"/"}
      />
      <RightWhiteContentCard
        conTitle={"KOMPANIYA HAQIDA"}
        conDescription={
          "Coca-Cola kompaniyasining O'zbekistondagi faoliyati haqida umumiy ma'lumot."
        }
        conImgPath={"/public/data2.webp"}
        conLink={"/"}
      />
      {/* brands components */}
      <OurBrands />
    </div>
  );
}

export default HomePage;
