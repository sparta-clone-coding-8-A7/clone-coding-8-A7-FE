import React, { useEffect } from 'react'
import { useNavigate , useLocation } from 'react-router-dom';
import axios from "axios"
import Header from '../header/Header';

const KakaoLogin = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const kakaoCode = location.search.split("=")[1];
    const postCode = async () =>{
        try{
            const response = await axios.get(`http://54.180.112.137:9990/api/user/login?code=${kakaoCode}`,{ // 백엔드 보내기.
            })
            localStorage.setItem("username",response.data.data.username)
            localStorage.setItem("email",response.data.data.email)
            localStorage.setItem("authorization",response.headers.authorization)
            localStorage.setItem("refreshtoken",response.headers.refreshtoken)
            navigate("/")
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        postCode()
    },[])
  return (
    <div className='kakaologin'>
        <Header></Header>
    </div>
  )
}

export default KakaoLogin