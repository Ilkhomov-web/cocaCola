import { Box, Button, Container, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./css/SusSwiper.css";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function SustainabitiySwipper(props) {
  const { title, data } = props;
  console.log(data);

  return (
    <div style={{ marginBottom: "80px" }}>
      <Container maxWidth="lg">
        <Typography
          data-aos="fade-up"
          variant="h4"
          sx={{ margin: "50px 0", fontWeight: "bold", textAlign: "center" }}
        >
          {title}
        </Typography>
        <Box>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            data-aos="fade-up"
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {data.map((item) => {
              return (
                <SwiperSlide
                  style={{
                    width: "30%",
                    height: "550px",
                    borderRadius: "12px",
                    position: "relative",
                    padding: 0,
                  }}
                  key={item.id}
                >
                  <Link
                    to={item.btnUrl}
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                  >
                    <img
                      src={item.img}
                      style={{
                        width: "100%",
                        height: "350px",
                        // objectFit: "cover",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                      }}
                      alt={item.title}
                    />
                    <Box sx={{ padding: 2 }}>
                      {/* <Typography sx={{ marginTop: "10px", fontWeight: 600 }}>
                        {item.title}
                      </Typography> */}
                      <Typography>{item.description}</Typography>
                    </Box>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>
    </div>
  );
}

export default SustainabitiySwipper;
