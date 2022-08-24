import React from "react";
import kakao from "../../assets/kakao2.png";
import "./Login.scss";

const Login = ({ loginUp, setLoginUp }) => {
  // 로그인 인증 토큰 보내기
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=code`;
  const loginAuth = async () => {
    window.location.href = kakaoUrl;
  };
  const darkModeHandle = () => {
    setLoginUp((prev) => !prev);
  };
  return (
    <div className="login">
      <div className="login-form">
        <div className="login-header">wanted</div>
        <div className="login-body">
          <div className="login-text">
            <h1>
              직장인을 위한
              <br></br>
              커리어 플랫폼, 투티드
            </h1>
            <h2>
              커리어 성장과 행복을 위한 여정
              <br></br>
              지금 투티드에서 시작하세요.
            </h2>
          </div>
          <div className="kakao">
            <img src={kakao} onClick={loginAuth}></img>
            <div className="kakao-name">Kakao</div>
          </div>
        </div>
      </div>
      <div className="dark-mode" onClick={darkModeHandle}></div>
    </div>
  );
};

export default Login;
