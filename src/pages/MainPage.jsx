// eslint-disable-next-line

import React, { useState } from "react";
import Slidercard from "../components/slider/Slider";
import Cards from "../components/cards/Cards";
import logo from "../assets/magnifi.png";
import RecommendSlider from "../components/recommendSlider/RecommendSlider";
import Header from "../components/header/Header";

const MainPage = () => {
  const [btnOn,setBtnOn] = useState(false);
  let auth = localStorage.getItem("authorization");
  let token1 = localStorage.getItem("refreshtoken");
  const handleBtn = () => {
    setBtnOn((prev)=>!prev)
  }
  const BigBtn = () => {
    return (
      <>
      {btnOn === false ? 
      <div className="bigbtn" onClick={handleBtn}>
        <img src={logo} alt="돋보기" className="magnifi"></img>
          채용 중인 포지션 보러가기
        </div>
       : null}
      </>
    );
  };

  return (
    <div className="mainpage">
      <Header></Header>
      <Slidercard></Slidercard>
      <BigBtn></BigBtn>
      <div className="recommend">
        <RecommendSlider></RecommendSlider>
        <Cards btnOn = {btnOn} setBtnOn={setBtnOn}></Cards>
      </div>
    </div>
  );
};

export default MainPage;
