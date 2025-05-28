import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import JavascriptIcon from "@mui/icons-material/Javascript";

function Footer() {
  return (
    <div style={{ background: "black", padding: "50px 0" }}>
      <Container maxWidth="lg" style={{ color: "white", padding: "20px" }}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box component={"img"} src="/public/footerLogo.svg"></Box>
            <Button
              sx={{
                width: "200px",
                background: "transparent",
                border: "1px solid white",
                color: "white",
                fontWeight: "bold",
                borderRadius: "20px",
              }}
            >
              <LocationOnIcon style={{ color: "white", marginRight: "10px" }} />
              O'zbekiston | UZ
            </Button>
          </Box>
          <hr style={{ margin: "40px 0px" }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "50px" }}>
              <Box
                sx={{ display: "flex", gap: "20px", flexDirection: "column" }}
              >
                <Typography
                  variant="p"
                  sx={{ color: "gray", fontSize: "16px" }}
                >
                  Biz haqimizda
                </Typography>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Kompaniya haqida
                  </Typography>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Hikoya
                  </Typography>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Media markazi
                  </Typography>
                </Link>
              </Box>
              <Box
                sx={{ display: "flex", gap: "20px", flexDirection: "column" }}
              >
                <Typography
                  variant="p"
                  sx={{ color: "gray", fontSize: "16px" }}
                >
                  Yordam kerakmi?
                </Typography>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Veb-sayt xaritasi
                  </Typography>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Kontaktlar
                  </Typography>
                </Link>
              </Box>
              <Box
                sx={{ display: "flex", gap: "20px", flexDirection: "column" }}
              >
                <Typography
                  variant="p"
                  sx={{ color: "gray", fontSize: "16px" }}
                >
                  Yuridik ma'lumotlar
                </Typography>
                <Link
                  style={{
                    textDecoration: "none",
                    width: "220px",
                    color: "white",
                  }}
                  to="/"
                >
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Shaxsiy ma'lumotlar uchun maxfiylik siyosati
                  </Typography>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Foydalanish shartlari
                  </Typography>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Cookie sozlamalari
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Link style={{ textDecoration: "none", color: "white" }}>
                  <FacebookIcon sx={{ fontSize: "30px" }} />
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }}>
                  <InstagramIcon sx={{ fontSize: "30px" }} />
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }}>
                  <YouTubeIcon sx={{ fontSize: "30px" }} />
                </Link>
              </Box>
            </Box>
          </Box>
          <hr style={{ margin: "40px 0px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
              to=""
            >
              <JavascriptIcon sx={{ fontSize: "35px" }} />
              Ilkhomov-web
              <JavascriptIcon sx={{ fontSize: "35px" }} />
            </Link>
            <Typography>
              © 2025 Coca-Cola kompaniyasi. Barcha huquqlar himoyalangan.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Footer;
