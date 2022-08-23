import React,{useEffect} from "react";
import Header from "../components/header/Header";
import "../assets/Global.scss";
import axios from "axios";

const CompanyPage = () => {
  const getGroup = async () => {
    try{
      const repo = await axios.get(`http://54.180.112.137:9990/api/company/jobPost`,{},{ // 직업군 카테고리 가져오기.
      })
      console.log(repo)
    } catch(error){
        console.log(error)
    }
  }
  useEffect(()=>{
    if(!localStorage.getItem("authorization") === true || !localStorage.getItem("refreshtoken") === true){
      getGroup()
    }
  },[])
  return (
    <>
      <Header></Header>  
      <div className="companypage">
        <h2>작성</h2>
        <form>            
          <h3></h3><input></input>
          <h3></h3><input></input>
          <h3></h3><input></input>
          <h3></h3><input></input>
          <h3></h3><input></input>
          <h3></h3><input></input>
          <button type="submit">제출하기</button>
        </form>
      </div>  
    </>
  )
}

export default CompanyPage;
