import React from 'react';
import "../../assets/Global.scss";
import hamburger from "../../assets/optimize.png";

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <nav className='nav-bar'>
          <div className='right-content'>
            <img src={hamburger}></img>
            <div className='wanted'>wanted</div>
          </div>
          <ul className='center-content'>
            <li className='navbar-item'><a>채용</a></li>
            <li className='navbar-item'><a>직군별 연봉</a></li>
            <li className='navbar-item'><a>이력서</a></li>
            <li className='navbar-item'><a>커뮤니티</a></li>
          </ul>
          <div className='left-content'></div>
        </nav>
      </div>
    </div>
  )
}

export default Header