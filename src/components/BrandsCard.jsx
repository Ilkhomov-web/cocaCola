import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

function BrandsCard(props) {
  const { brandData } = props;
  return (
    <Container maxWidth="lg">
      {brandData.brand.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "60px",
          }}
        >
          <Box sx={{ width: "40%" }} data-aos="fade-right">
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              {item.brandName}
            </Typography>
            <Typography sx={{ fontWeight: "500", marginBottom: "10px" }}>
              {item.brandDes}
            </Typography>
            <hr
              style={{
                margin: "15px 0px",
                border: "0.5px solid rgba(0, 0, 0, 0.07)",
              }}
            />
            <Box sx={{ width: "100%" }}>
              <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={`panel-${item.id}-header`}
                >
                  <Typography
                    component="span"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Oziqlanish ma'lumotlari
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    background: "white",
                    boxShadow: "0px 4px 90px 10px rgba(0, 0, 0, 0.07)",
                    padding: "20px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", marginBottom: "5px" }}
                  >
                    Oziqlanish qiymati
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    100 ml uchun
                  </Typography>
                  <hr
                    style={{
                      margin: "15px 0px",
                      border: "0.5px solid rgba(0, 0, 0, 0.07)",
                    }}
                  />
                  {[
                    [
                      "Kaloriya",
                      `${item.nutritionalInformation.calories} kkal (${item.nutritionalInformation.caloriesKJ} kJ)`,
                    ],
                    [
                      "Umumiy yog'",
                      `${item.nutritionalInformation.totalFat} g`,
                    ],
                    [
                      "To'yingan yog'lar",
                      `${item.nutritionalInformation.saturatedFats} g`,
                    ],
                    [
                      "Jami uglevodlar",
                      `${item.nutritionalInformation.totalCarbohydrates} g`,
                    ],
                    [
                      "Jami shakar",
                      `${item.nutritionalInformation.totalSugar} g`,
                    ],
                    ["Protein", `${item.nutritionalInformation.protein} g`],
                    ["Tuz", `${item.nutritionalInformation.salt} g`],
                  ].map(([label, value], index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        {label}
                      </Typography>
                      <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                        {value}
                      </Typography>
                    </Box>
                  ))}
                  <hr
                    style={{
                      margin: "15px 0px",
                      border: "0.5px solid rgba(0, 0, 0, 0.07)",
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Ingredientlar
                  </Typography>
                  <Typography color="gray">
                    {item.nutritionalInformation.ingredientlar}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
          <Box
            component={"img"}
            data-aos="fade-left"
            src={item.brandImageUrl.replace("/public", "")}
            alt={item.brandName}
            sx={{
              width: "49%",
              height: "580px",
              borderRadius: "12px",
              boxShadow: "0px 4px 90px 10px rgba(0, 0, 0, 0.1)",
              objectFit: "cover",
            }}
          />
        </Box>
      ))}
    </Container>
  );
}

export default BrandsCard;
