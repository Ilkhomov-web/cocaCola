import { Box, Typography } from "@mui/material";
import React from "react";

const SustainabilitiyHeader = (props) => {
  const { imgUrl, title, description1, description2 } = props;
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
        data-aos="fade-up"
        src={imgUrl}
      ></Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Typography
          variant="h4"
          data-aos="fade-up"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {title}
        </Typography>
        <Typography
          data-aos="fade-up"
          variant="p"
          sx={{ textAlign: "left", fontSize: "18px" }}
        >
          {description1}
        </Typography>
        <Typography
          data-aos="fade-up"
          variant="p"
          sx={{ textAlign: "left", fontSize: "18px" }}
        >
          {description2}
        </Typography>
      </Box>
    </div>
  );
};

export default SustainabilitiyHeader;
