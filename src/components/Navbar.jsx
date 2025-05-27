import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [isHover, setIsHover] = useState(true);

  const handleHoverMouse = () => {
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
              component="img"
              sx={{ "&:hover": { cursor: "pointer" } }}
              src="/public/logo.svg"
            ></Box>
          </Link>
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
          >
            Brendlar
          </Typography>
          <Typography
            onMouseEnter={handleHoverMouse}
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
            sx={{
              width: "200px",
              padding: "15px",
              background: "white",
              display: isHover ? "none" : "flex",
              position: "absolute",
              top: "84px",
              left: "656px",
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
