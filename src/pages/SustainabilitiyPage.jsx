import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SustainabilitiyHeader from "../components/SustainabilitiyHeader";
import { Box, Container, Typography } from "@mui/material";
import SustainabilitiyHeaderContent from "../components/SustainabilitiyHeaderContent";
import SustainabitiySwipper from "../components/SustainabitiySwipper";
import SustainabitiyCard from "../components/SustainabitiyCard";
import RightWhiteContentCard from "../components/RightWhiteContentCard";
import LeftWhiteContentCard from "../components/LeftWhiteContentCard";
import data from "../data/SustainbilitiyData";

import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function SustainabilitiyPage(props) {
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
          imgUrl="/public/susHeader.webp"
          title="Bizning sayyoramiz juda muhim ahamiyatga ega"
          description1="Bizning maqsadimiz barqaror va yaxshiroq umumiy kelajakdir. Hayotni,
          jamoalarni va sayyoramizni yaxshi tomonga o'zgartiradigan barqaror
          biznes yondashuvi. Yaxshilikka intilish orqali biz barchamiz uchun
          yanada kuchli, barqaror kelajakni qurishimiz mumkin."
          description2="Biz ijtimoiy, ekologik va iqtisodiy boshqaruvga alohida e’tibor
          qaratgan holda barqaror rivojlanish masalalariga kompleks yondashamiz.
          Faqat tizimli yondashuv radikal va barqaror o'zgarishlar yo'lida
          to'g'ri vositadir."
        />
        <SustainabilitiyHeaderContent
          imgUrl="/public/susAka.webp"
          description="Barqarorlik strategiyamiz orqali biz atrof-muhitni muhofaza qilish
              maqsadlarimiz sari olg'a siljish uchun brendlarimiz bo'ylab ajoyib
              odamlarni qo'llab-quvvatlaymiz va jalb qilamiz - fermerlar va
              xodimlardan shisha quyish bo'yicha hamkorlar va yetkazib
              beruvchilar, mijozlar va iste'molchilar va biz yashayotgan
              jamoalar."
        />
        <SustainabitiySwipper
          title="Ekologik barqaror rivojlanish sohasidagi faoliyatimiz yo'nalishlari"
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

export default SustainabilitiyPage;
