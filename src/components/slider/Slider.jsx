import React from 'react'
import Slider from "react-slick";
import logo from "../../assets/bookshelf.png"
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./Slider.scss"
import log from "../../assets/optimize1.webp"

const imgDir = [{
    image: "../../assets/optimize1.webp"
  },
  {
    image: "../../assets/optimize2.webp"
  },
  {
    image: "../../assets/optimize3.webp"
  },
  {
    image: "../../assets/optimize4.webp"
  }
]
const Slidercard = () => {
  const settings = {
    autoplaySpeed:5000,
    autoplay:true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    useCSS:true,
  };
  return (
    <div className='slider'>
      <h2> Single Item</h2>
        <Slider {...settings}>
          {imgDir.map((img,index)=>{
            return(
            <div key={index}>
              <img className='items-view' src={img.image}></img>
            </div>
            )
          })}
        </Slider>
    </div>
  )
}

export default Slidercard