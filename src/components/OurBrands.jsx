import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DataBrands = [
  { id: 1, imgUrl: "/icon.svg", urlPage: "/brands/coca-cola" },
  { id: 2, imgUrl: "/fanta.svg", urlPage: "/brands/fanta" },
  { id: 3, imgUrl: "/sprite.svg", urlPage: "/brands/sprite" },
];

function OurBrands(props) {
  const { marginTop, display } = props;
  return (
    <div style={{ marginTop: marginTop, marginBottom: "100px" }}>
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
            data-aos="fade-down"
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
            {DataBrands.map((item) => {
              return (
                <Link key={item.id} to={item.urlPage}>
                  <Box
                    data-aos="zoom-in"
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
                    <Box component={"img"} src={item.imgUrl}></Box>
                  </Box>
                </Link>
              );
            })}
          </Box>
          <Link to="/brands" style={{ textDecoration: "none" }}>
            <Button
              data-aos="fade-up"
              sx={{
                display: display,
                width: "200px",
                background: "black",
                color: "white",
                fontWeight: "bold",
                borderRadius: "20px",
                "&:hover": {
                  background: "#333",
                  cursor: "pointer",
                },
              }}
            >
              Barcha brendlar
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
}

export default OurBrands;
