import React,{useEffect,useState} from 'react'
import axios from "axios"
import logowant from "../../assets/logo-wantedai.png"
import "./RecommendSlider.scss"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

let url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=1"

const RecommendSlider = () => {
    const [data,setData] = useState([])

    const response = async () => {
        try{
          const resp = await axios.get(url,{
        })
        console.log(resp.data.results)
        setData(resp.data.results)
        }catch(error){
            console.log(error);
            return error
        }
    } 
    useEffect(()=>{
        response()
    },[])
    return (
    <div className='recommendation'>
      <div className='reco-content'>
        <div className='reco-left'>
          {/* <button type="button" className='arrow-left'>{"<"}</button> */}
        </div>
        <div className='reco-center'>
          <div className='recommend-comment'>
            <img className='logowant' src={logowant} alt="로고2"></img>
            가 제안하는 합격률 높은 포지션
          </div>
          <a href='/ready' className='position-ent'>포지션 전체보기
            <span>{">"}</span>
          </a>
        </div>
        <div className='reco-right'>
          {/* <button type="button" className='arrow-right'>{">"}</button> */}
        </div>
      </div>
        <div className='recommend-items' >
          <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[ Pagination ,Navigation]}
          className="mySwiper"
          >
          {data && data.map((datas,index)=>{
            return(      
              <SwiperSlide className='recommend-item' key={index}>{datas.name}</SwiperSlide>
            )
          })}
          </Swiper>
            
        </div>
    </div>
  )
}

export default RecommendSlider