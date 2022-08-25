import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Slidercard from "../components/slider/Slider";
import Cards from "../components/cards/Cards";
import { useLocation, useNavigate } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  // console.log(location.state)

  useEffect(() => {
    if (location.state !== "") {
      setData(location.state);
      navigate("/searchpage", { state: data });
      // console.log("넣음")
    }
  }, []);
  
  return (
    <div>
      <Header></Header>
      <Slidercard></Slidercard>
      <Cards></Cards>
    </div>
  );
};

export default SearchPage;
