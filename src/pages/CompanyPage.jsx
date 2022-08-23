import React from "react";
import Header from "../components/header/Header";
import "../assets/Global.scss"

const CompanyPage = () => {
  return (
    <>
      <Header></Header>  
      <div className="companypage">
        
        <div className="">
          <h2>작성</h2>
          <form>
            <label></label>
            <input></input>
            <label></label>
            <input></input>
            <label></label>
            <input></input>
            <label></label>
            <input></input>
            <label></label>
            <input></input>
            <button>제출하기</button>
          </form>
        </div>
      </div>  
    </>
  )
}

export default CompanyPage;
