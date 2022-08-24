// eslint-disable-next-line

import React from "react";
import Slidercard from "../components/slider/Slider";
import Cards from "../components/cards/Cards";
import logo from "../assets/magnifi.png";
import RecommendSlider from "../components/recommendSlider/RecommendSlider";
import Header from "../components/header/Header";

const MainPage = () => {
  const BigBtn = () => {
    return (
      <a>
        <div className="bigbtn">
          <img src={logo} alt="돋보기" className="magnifi"></img>
          채용 중인 포지션 보러가기
        </div>
      </a>
    );
  };

  return (
    <div className="mainpage">
      <Header></Header>
      <Slidercard></Slidercard>
      <BigBtn></BigBtn>
      <div className="recommend">
        <RecommendSlider></RecommendSlider>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default MainPage;
