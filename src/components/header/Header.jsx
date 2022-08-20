import React, { useState } from 'react';
import "../../assets/Global.scss";
import hamburger from "../../assets/optimize.png";
import magnifier from "../../assets/Magnifier.png"

const Header = () => {
  const [item,setItem] = useState("")
  const handleClick = (e) => {
    e.preventDefault();
    setItem((prev)=>{
      return e.target.value
    });
    console.log(item)
  }
  return (
    <div className='header'>
      <div className='header-content'>
        <nav className='nav-bar'>
          <div className='right-content'>
            <img src={hamburger}></img>
            <div className='wanted'>wanted</div>
          </div>
          <ul className='center-content'>
            <li className="navbar-item"><a href='/'>채용</a></li>
            <li className="navbar-item"><a href='/'>채용</a></li>
            <li className="navbar-item"><a href='/'>채용</a></li>
            <li className="navbar-item"><a href='/'>채용</a></li>
          </ul>
          <div className='left-content'>
            <ul className='left-tag'>
              <li className='left-tags'><a href='/'><img src={magnifier}></img></a></li>
              <li className='left-tags'><a href='/'>회원가입/로그인</a></li>
              <li className='left-tags'><a href='/'><button className='anchor'>기업 서비스</button></a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header