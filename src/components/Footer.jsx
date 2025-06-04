import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import JavascriptIcon from "@mui/icons-material/Javascript";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div style={{ background: "black", padding: "50px 0" }}>
      <Container maxWidth="lg" style={{ color: "white", padding: "20px" }}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              data-aos="fade-right"
              component={"img"}
              src="/public/footerLogo.svg"
            ></Box>
            <Button
              data-aos="fade-left"
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
          <hr data-aos="flip-right" style={{ margin: "40px 0px" }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "50px" }}>
              <Box
                sx={{ display: "flex", gap: "20px", flexDirection: "column" }}
              >
                <Typography
                  data-aos="fade-up"
                  variant="p"
                  sx={{ color: "gray", fontSize: "16px" }}
                >
                  Biz haqimizda
                </Typography>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                  data-aos="fade-up"
                >
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
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                  data-aos="fade-up"
                >
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
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                  data-aos="fade-up"
                >
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
                  data-aos="fade-up"
                  variant="p"
                  sx={{ color: "gray", fontSize: "16px" }}
                >
                  Yordam kerakmi?
                </Typography>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                  data-aos="fade-up"
                >
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
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                  data-aos="fade-up"
                >
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
                  data-aos="fade-up"
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
                  data-aos="fade-up"
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
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                  data-aos="fade-up"
                >
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
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                  data-aos="fade-up"
                >
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
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  data-aos="fade-up"
                >
                  <FacebookIcon sx={{ fontSize: "30px" }} />
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  data-aos="fade-up"
                >
                  <InstagramIcon sx={{ fontSize: "30px" }} />
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  data-aos="fade-up"
                >
                  <YouTubeIcon sx={{ fontSize: "30px" }} />
                </Link>
              </Box>
            </Box>
          </Box>
          <hr style={{ margin: "40px 0px" }} data-aos="flip-right" />
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
              to="https://t.me/Elka_0624"
              target="blank_"
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
