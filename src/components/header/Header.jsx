import React, { useState } from "react";
import "../../assets/Global.scss";
import hamburger from "../../assets/optimize.png";
import magnifier from "../../assets/Magnifier.png";
import Search from "../search/Search";

const Header = () => {
  const [searchBar, setSearchBar] = useState(false); // 검색창 여닫이
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchBar((prev) => !prev);
  };
  return (
    <div className="header-spec">
      {searchBar === false ? (
        <div className="header">
          <div className="header-content">
            <nav className="nav-bar">
              <div className="right-content">
                <img className="logo" src={hamburger}></img>
                <div className="wanted">wanted</div>
              </div>
              <ul className="center-content">
                <li className="navbar-item">
                  <a href="/">채용</a>
                </li>
                <li className="navbar-item">
                  <a href="/">채용</a>
                </li>
                <li className="navbar-item">
                  <a href="/">채용</a>
                </li>
                <li className="navbar-item">
                  <a href="/">채용</a>
                </li>
              </ul>
              <div className="left-content">
                <ul className="left-tag">
                  <li className="left-tags">
                    <img
                      className="magnifier"
                      onClick={handleSearch}
                      src={magnifier}></img>
                  </li>
                  <li className="left-tags">
                    <a href="/">회원가입/로그인</a>
                  </li>
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
    </div>
  );
};

export default Header;
