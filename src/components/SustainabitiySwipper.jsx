import { Box, Button, Container, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./css/SusSwiper.css";
import { FreeMode, Pagination } from "swiper/modules";
import data from "../data/SustainbilitiyData";
import { Link } from "react-router-dom";

function SustainabitiySwipper(props) {
  console.log(typeof data[0].img);

  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ margin: "50px 0", fontWeight: "bold" }}>
          Ekologik barqaror rivojlanish sohasidagi faoliyatimiz yo'nalishlari
        </Typography>
        <Box>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {data.map((item) => {
              return (
                <SwiperSlide
                  style={{ height: "550px", borderRadius: "12px" }}
                  key={item.id}
                >
                  <img
                    src={item.img}
                    style={{
                      position: "absolute",
                      top: "0",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                    alt={item.img}
                  />
                  <Typography sx={{ marginTop: "300px" }}>
                    {item.title}
                  </Typography>
                  <Typography>{item.description}</Typography>

                  <Link to={``}>
                    <Button></Button>
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
