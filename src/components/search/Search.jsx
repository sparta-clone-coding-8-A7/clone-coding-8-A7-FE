// eslint-disable-next-line

import React, { useState } from "react";
import "./Search.scss";
import magnifier from "../../assets/Magnifier.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = ({ searchBar, setSearchBar }) => {
  // const navigates = useNavigate();
  const [search, setSearch] = useState("");

  console.log(searchBar);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleOut = () => {
    setSearchBar((prev) => !prev);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };
  const submitSearch = async () => {
    // 검색어 제출 부분
    try {
      const resp = await axios.get(
        "",
        {
          // 보내 search로 검색 url 작성,
        },
        { withCredentials: true }
      );
      console.log(resp);
      // navigate("/",{state:resp})
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
