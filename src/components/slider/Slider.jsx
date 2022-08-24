// eslint-disable-next-line

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./Slider.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const imgDir = [
  {
    image: "../../assets/optimize1.webp",
  },
  {
    image: "../../assets/optimize2.webp",
  },
  {
    image: "../../assets/optimize3.webp",
  },
  {
    image: "../../assets/optimize4.webp",
  },
];
const Slidercard = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {imgDir.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="items-view" src={img.image}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slidercard;
