import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./css/swiper.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Box, Container } from "@mui/material";

const swiperData = [
  {
    id: 1,
    image: "/public/swiper1.webp",
  },
  {
    id: 2,
    image: "/public/swiper2.webp",
  },
  {
    id: 3,
    image: "/public/swiper3.webp",
  },
];

function Swipper(props) {
  return (
    <Box sx={{ width: "100%", padding: "30px 0px" }}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ width: "100%", height: "600px" }}
        >
          {swiperData.map((item) => (
            <SwiperSlide key={item.id}>
              <Box
                width={"100%"}
                component={"img"}
                src={item.image}
                sx={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
              ></Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}

export default Swipper;
