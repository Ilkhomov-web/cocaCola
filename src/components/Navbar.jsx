import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar(props) {
  const [isHover, setIsHover] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleHoverMouse = (props) => {
    setIsHover(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "30px 0px",
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "40px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Box
              data-aos="fade-right"
              component="img"
              sx={{ "&:hover": { cursor: "pointer" } }}
              src="/public/logo.svg"
            ></Box>
          </Link>
          <Link to="/brands" style={{ textDecoration: "none", color: "black" }}>
            <Typography
              sx={{
                position: "relative",
                display: "inline-block",
                fontWeight: "bold",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-30px",
                  left: 0,
                  width: "100%",
                  height: "4px",
                  backgroundColor: "black",
                  transform: "translateY(5px)",
                  opacity: 0,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                },
                "&:hover::after": {
                  transform: "translateY(0px)",
                  opacity: 1,
                  cursor: "pointer",
                },
              }}
              data-aos="fade-up"
            >
              Brendlar
            </Typography>
          </Link>
          <Typography
            onMouseOver={() => setIsHover(false)}
            onMouseOut={() => setIsHover(true)}
            data-aos="fade-left"
            sx={{
              position: "relative",
              display: "inline-block",
              fontWeight: "bold",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-30px",
                left: 0,
                width: "100%",
                height: "4px",
                backgroundColor: "black",
                transform: "translateY(5px)",
                opacity: 0,
                transition: "transform 0.3s ease, opacity 0.3s ease",
              },
              "&:hover::after": {
                transform: "translateY(0px)",
                opacity: 1,
                cursor: "pointer",
              },
            }}
          >
            Ta'sir qilish
          </Typography>
          <Box
            onMouseOver={() => setIsHover(false)}
            onMouseOut={() => setIsHover(true)}
            sx={{
              width: "200px",
              padding: "15px",
              background: "#eee",
              zIndex: 1000,
              display: isHover ? "none" : "flex",
              position: "absolute",
              top: "54px",
              left: "648px",
              flexDirection: "column",
              gap: "15px",
              borderRadius: "5px",
            }}
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              Barqaror rivojlanish
            </Link>
            <Link to="/a" style={{ textDecoration: "none", color: "black" }}>
              Ijtimoiy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
