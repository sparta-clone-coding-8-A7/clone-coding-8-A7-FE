// eslint-disable-next-line

import React, { useState } from "react";
import "../../assets/Global.scss";
import hamburger from "../../assets/optimize.png";
import magnifier from "../../assets/Magnifier.png";
import Search from "../search/Search";
import Login from "../login/Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dataServer = process.env.REACT_APP_DATA;

  const [searchBar, setSearchBar] = useState(false); // 검색창 여닫이
  const [loginUp, setLoginUp] = useState(false); // 로그인 창 여닫이
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchBar((prev) => !prev);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginUp((prev) => !prev);
  };
  const handleLogOut = async (e) => {
    e.preventDefault();
    // setLoginUp((prev)=>!prev)
    let auth = localStorage.getItem("authorization");
    let refresh = localStorage.getItem("refreshtoken");
    try {
      await axios.post(
        dataServer + `/user/logout`,
        {},
        {
          // 로그아웃
          headers: {
            "Content-Type": "application/json",
            Authorization: auth,
            RefreshToken: refresh,
          },
        }
      );
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("authorization");
      localStorage.removeItem("refreshtoken");
      localStorage.removeItem("id");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="header-spec">
      {searchBar === false ? (
        <div className="header">
          <div className="header-content">
            <nav className="nav-bar">
              <div className="right-content">
                <img className="logo" src={hamburger} alt="logoHamburger"></img>
                <div className="wanted">
                  <a href="/">wanted</a>
                </div>
              </div>
              <ul className="center-content">
                <li className="navbar-item">
                  <a href="/">채용</a>
                </li>
                <li className="navbar-item">
                  <a href="/companypage">채용등록</a>
                </li>
                {/* <li className="navbar-item"><a href='/'>채용</a></li>
              <li className="navbar-item"><a href='/'>채용</a></li> */}
              </ul>
              <div className="left-content">
                <ul className="left-tag">
                  <li className="left-tags">
                    <img
                      className="magnifier"
                      onClick={handleSearch}
                      src={magnifier}
                      alt="search"></img>
                  </li>
                  {!localStorage.getItem("authorization") === true &&
                  !localStorage.getItem("refreshtoken") === true ? (
                    <li className="left-tags">
                      <div onClick={handleLogin} className="sign-in">
                        회원가입/로그인
                      </div>
                    </li>
                  ) : (
                    <li className="left-tags">
                      <div onClick={handleLogOut} className="sign-in">
                        로그아웃
                      </div>
                    </li>
                  )}
                  <li className="left-btn">
                    <a href="/">
                      <button className="anchor">기업 서비스</button>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      ) : (
        <Search searchBar={searchBar} setSearchBar={setSearchBar}></Search>
      )}
      {loginUp === false ? (
        ""
      ) : (
        <Login loginUp={loginUp} setLoginUp={setLoginUp}></Login>
      )}
    </div>
  );
};
export default Header;
