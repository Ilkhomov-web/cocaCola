import { Box, Typography } from "@mui/material";
import React from "react";

const SustainabilitiyHeader = (props) => {
  return (
    <div>
      <Box
        component={"img"}
        sx={{
          width: "100%",
          height: "500px",
          margin: "50px 0px",
          borderRadius: "10px",
        }}
        src="/public/susHeader.webp"
      ></Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Bizning sayyoramiz juda muhim ahamiyatga ega
        </Typography>
        <Typography variant="p" sx={{ textAlign: "left", fontSize: "18px" }}>
          Bizning maqsadimiz barqaror va yaxshiroq umumiy kelajakdir. Hayotni,
          jamoalarni va sayyoramizni yaxshi tomonga o'zgartiradigan barqaror
          biznes yondashuvi. Yaxshilikka intilish orqali biz barchamiz uchun
          yanada kuchli, barqaror kelajakni qurishimiz mumkin.
        </Typography>
        <Typography variant="p" sx={{ textAlign: "left", fontSize: "18px" }}>
          Biz ijtimoiy, ekologik va iqtisodiy boshqaruvga alohida e’tibor
          qaratgan holda barqaror rivojlanish masalalariga kompleks yondashamiz.
          Faqat tizimli yondashuv radikal va barqaror o'zgarishlar yo'lida
          to'g'ri vositadir.
        </Typography>
      </Box>
    </div>
  );
};

export default SustainabilitiyHeader;
