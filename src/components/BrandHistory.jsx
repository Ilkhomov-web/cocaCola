import { Container, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import Footer from "./Footer";

function BrandHistory(props) {
  const { brandData } = props;
  console.log(brandData, "elkasssss");

  return (
    <div>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            margin: "20px 0px",
            textAlign: "center",
          }}
          data-aos="fade-up"
        >
          {brandData["brandPageName"]}
        </Typography>
        <Typography
          data-aos="fade-up"
          variant="h6"
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          {brandData["brandPageDes"]}
        </Typography>
        {brandData["brandVideoUrl"] && (
          <ReactPlayer
            data-aos="fade-up"
            width={"100%"}
            height={"700px"}
            style={{ margin: "20px 0px" }}
            url={brandData["brandVideoUrl"]}
          />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default BrandHistory;
