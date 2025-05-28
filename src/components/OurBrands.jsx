import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function OurBrands() {
  return (
    <div style={{ marginTop: "600px", marginBottom: "100px" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              marginBottom: "50px",
              fontWeight: "bold",
            }}
          >
            Bizning brendlarimiz bilan tanishing
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "40px",
              gap: "50px",
            }}
          >
            <Box
              sx={{
                width: "300px",
                background: "white",
                padding: "50px",
                borderRadius: "20px",
                "&:hover": {
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transform: "scale(1.05)",
                  cursor: "pointer",
                  transition: "transform 0.5s ease",
                },
              }}
            >
              <Box component={"img"} src="/public/icon.svg"></Box>
            </Box>
            <Box
              sx={{
                width: "300px",
                background: "white",
                padding: "50px",
                borderRadius: "20px",
                "&:hover": {
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transform: "scale(1.05)",
                  cursor: "pointer",
                  transition: "transform 0.5s ease",
                },
              }}
            >
              <Box component={"img"} src="/public/fanta.svg"></Box>
            </Box>
            <Box
              sx={{
                width: "300px",
                background: "white",
                padding: "50px",
                borderRadius: "20px",
                "&:hover": {
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transform: "scale(1.05)",
                  cursor: "pointer",
                  transition: "transform 0.5s ease",
                },
              }}
            >
              <Box component={"img"} src="/public/sprite.svg"></Box>
            </Box>
          </Box>
          <Button
            sx={{
              width: "50%",
              background: "transparent",
              border: "1px solid #000",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "20px",
            }}
          >
            Ko'proq o'qish
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default OurBrands;
