import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SustainabilitiyHeaderContent(props) {
  const { imgUrl, description } = props;
  return (
    <div>
      <Container maxWidth="lg">
        <Box
          sx={{
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)",
              pointerEvents: "none",
              zIndex: 1,
              borderRadius: "10px",
            },
            width: "100%",
            height: "500px",
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
            padding: "40px",
            borderRadius: "10px",
            marginTop: "50px",
            marginBottom: "50px",
            filter: "brightness(0.9)",
            display: "flex",
            alignItems: "center",
          }}
          data-aos="fade-up"
        >
          <Box
            sx={{
              width: "450px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              zIndex: 2,
            }}
          >
            <Typography
              data-aos="fade-up"
              variant="p"
              sx={{ fontSize: "18px", color: "#fff", wordSpacing: "2px" }}
            >
              {description}
            </Typography>
            <Link to="" data-aos="fade-up" sx={{ textDecoration: "none" }}>
              <Button
                sx={{
                  background: "#fff",
                  width: "300px",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Ko'proq o'qish
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default SustainabilitiyHeaderContent;
