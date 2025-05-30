import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SustainabitiyCard(props) {
  const { description, imgUrl, btnUrl } = props;
  return (
    <>
      <Box
        data-aos="fade-up"
        sx={{
          width: "49%",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "space",
          backgroundColor: "white",
          borderRadius: "12px",
          paddingBottom: "20px",
        }}
      >
        <Box
          component={"img"}
          sx={{
            width: "100%",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
          src={imgUrl}
        ></Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", margin: 3 }}>
          {description}
        </Typography>
        <Link target="_blank" sx={{ textDecoration: "none" }} to={btnUrl}>
          <Button
            sx={{
              width: "200px",
              margin: "10px 20px",
              textAlign: "left",
              background: "black",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Ko'proq o'qish
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default SustainabitiyCard;
