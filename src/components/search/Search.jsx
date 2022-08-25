// eslint-disable-next-line

import React, { useState } from "react";
import "./Search.scss";
import magnifier from "../../assets/Magnifier.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = ({ searchBar, setSearchBar }) => {
  const navigates = useNavigate();
  const [search, setSearch] = useState("");
  const [result,setResult] = useState("");

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value);
  };
  const handleOut = () => {
    setSearchBar((prev) => !prev);
  };
  const handleEnter = (e) => {
    e.preventDefault()
    if (e.key === "Enter") {
      submitSearch();
    }
  };
  const submitSearch = async () => {
    // 검색어 제출 부분
    //http://54.180.112.137:9990/api/jobPost?query=서버&cursor=00000522082115031000000015&size=7
    try {
      const resp = await axios.get(`http://54.180.112.137:9990/api/jobPost?query=${search}&size=12`,
        // {
        // },
      );
      console.log(resp.data.data);
      setResult(resp.data)
      if (resp.data.data.length === 0){
        console.log("검색 없음 결과")
        navigates("/searchpage",{state:result})
      }else{
        navigates("/searchpage",{state:result})
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="search">
      <div className="search-container">
        <form>
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            onKeyDown={handleEnter}
            placeholder="회사, 포지션 검색"></input>
          <img src={magnifier}></img>
          <button type="submit" onClick={submitSearch}>
            제출
          </button>
        </form>
      </div>
      <div onClick={handleOut} className="black-out"></div>
    </div>
  );
};

export default Search;
