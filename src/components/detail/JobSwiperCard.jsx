import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./JobSwiperCard.scss";

const JobSwiperCard = () => {
  SwiperCore.use([Navigation, Scrollbar]);

  const images = [
    {
      image: require("../../assets/random1.png"),
    },
    { image: require("../../assets/random2.png") },
    { image: require("../../assets/random1.png") },
  ];

  console.log(images);

  return (
    <Swiper
      className="imageSwiperContainer"
      centeredSlides={true}
      spaceBetween={8}
      slidesPerView={1}
      scrollbar={{ draggable: true, dragSize: 24 }}
      navigation={true}>
      {images.map((image, index) => {
        return (
          <SwiperSlide className="image" key={index}>
            <img src={image.image} alt="imageSlide" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default JobSwiperCard;
