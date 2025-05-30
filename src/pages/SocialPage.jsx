import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SustainabilitiyHeader from "../components/SustainabilitiyHeader";
import { Box, Container, Typography } from "@mui/material";
import SustainabilitiyHeaderContent from "../components/SustainabilitiyHeaderContent";
import SustainabitiySwipper from "../components/SustainabitiySwipper";
import SustainabitiyCard from "../components/SustainabitiyCard";
import RightWhiteContentCard from "../components/RightWhiteContentCard";
import LeftWhiteContentCard from "../components/LeftWhiteContentCard";
import Footer from "../components/Footer";
import data from "../data/SocialData";
import AOS from "aos";
import "aos/dist/aos.css";

function SocialPage(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <SustainabilitiyHeader
          imgUrl="/public/social1.webp"
          title="Hayotimni yo'qotganim uchun juda afsusdaman"
          description1="'Turfa, adolatli va inklyuziv ish joyi bizni kompaniya sifatida kuchliroq qilishiga, to'g'ri va jamoalar uchun umumiy kelajakga imkon berishiga, tengdan to'g'ridan-to'g'ri boshlashga berishiga va ishimizni va jamiyatimizga bog'liqlik yordamiga ishonamiz."
          description2="Oʻz fermermizdan tashqari, biz dunyo boʻylab yuzlab hamkorlar, minglab taʼminotchilar va millionlab taʼminotchilar bilan ishlaymiz. Maqsadimiz xavfsiz va uzoq taʼminot zanjirining qismi sifatidayashnayotgan va tashqi koʻrinishdagi hamjamiyatlar olinadi.Biz iqtisodiy foyda, tenglik xilma-xillik, inklyuzivlikni va investitsiya tizimini yaxshilash orqali umumiy rivojlanishga harakat qilyapmiz va bularni Coca‑Cola fondi orqali amalga oshiryapmiz.Koprogini kashf eting"
        />
        <SustainabilitiyHeaderContent
          imgUrl="/public/social2.webp"
          description="Biz iqtisodiy foyda, tenglik xilma-xillik, inklyuzivlikni va investitsiya tizimini yaxshilash orqali umumiy rivojlanishga harakat qilyapmiz va bularni Coca‑Cola fondi orqali amalga oshiryapmiz. "
        />
        <SustainabitiySwipper
          title="Bizning diqqat markazimiz ijtimoiy sohalarimiz"
          data={data}
        />
        <Box>
          <Typography
            data-aos="fade-up"
            variant="h4"
            sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
          >
            Barqaror rivojlanish innovatsiyalari
          </Typography>
          ;
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SustainabitiyCard
              title="Barqaror rivojlanish innovatsiyalari"
              description="Coca-Cola Group va Coca-Cola Foundation Kentukkidagi suv toshqini oqibatlarini bartaraf etishda faol ishtirok etmoqda."
              imgUrl="/public/card1.webp"
              btnUrl="https://www.coca-colacompany.com/media-center/coca-cola-showcases-solutions-at-convenience-stores-show"
            />
            <SustainabitiyCard
              description="DASANI va Sprite Shimoliy Amerikada qadoqlash barqarorligini yaxshilash ustida ishlamoqda"
              imgUrl="/public/card2.webp"
              btnUrl="https://www.coca-colacompany.com/about-us/sustainability"
            />
          </Box>
        </Box>
        <RightWhiteContentCard
          marginSize="100px"
          conTitle="Atrof-muhit, ijtimoiy va korporativ boshqaruv hisoboti 2021"
          conDescription="Siz yoqtirgan brendlar va mahsulotlar bilan bir qatorda biz biznesimiz va sayyoramiz uchun barqaror kelajakni yaratmoqdamiz. Bularning barchasini biz tanlagan maqsadimizga sodiq qolgan holda qilamiz: dunyoni yangilash va uni yaxshi tomonga o'zgartirish."
          conImgPath="/public/susRg1.webp"
          conLink="https://www.coca-colacompany.com/about-us/sustainability"
          pageTitle="Bizning global maqsadlarimiz, tashabbuslarimiz va barqaror rivojlanish yo'lidagi taraqqiyotimiz"
        />
        <LeftWhiteContentCard
          marginSize="700px"
          marginBottom="700px"
          conTitle="Barqaror rivojlanish uchun resurs markazi"
          conDescription="Ushbu resurs odamlarga, jamoalarga va sayyoramizga ijobiy ta'sir ko'rsatadigan barqaror biznes va umumiy kelajakka qaratilgan ishimiz haqida tushuncha beradi."
          conImgPath="/public/suslf1.webp"
          conLink="https://www.coca-colacompany.com/about-us/sustainability"
        />
      </Container>
      <Footer />
    </div>
  );
}

export default SocialPage;
