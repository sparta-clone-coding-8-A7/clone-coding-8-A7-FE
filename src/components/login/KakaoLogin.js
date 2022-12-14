// eslint-disable-next-line

import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../header/Header";

const KakaoLogin = () => {
  const dataServer = process.env.REACT_APP_DATA;

  const location = useLocation();
  const navigate = useNavigate();
  const kakaoCode = location.search.split("=")[1];
  const postCode = async () => {
    try {
      const response = await axios.get(
        dataServer + `/user/login?code=${kakaoCode}`,
        {
          // 백엔드 보내기.
        }
      );
      localStorage.setItem("username", response.data.data.username);
      localStorage.setItem("email", response.data.data.email);
      localStorage.setItem("authorization", response.headers.authorization);
      localStorage.setItem("refreshtoken", response.headers.refreshtoken);
      localStorage.setItem("id", response.data.data.id);
      // console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    postCode();
  }, []);
  return (
    <div className="kakaologin">
      <Header></Header>
    </div>
  );
};

export default KakaoLogin;
