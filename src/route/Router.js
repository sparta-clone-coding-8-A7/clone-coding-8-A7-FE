import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Ready from "../pages/Ready";
import JobPage from "../pages/JobPage";
import KakaoLogin from "../components/login/KakaoLogin";
import CompanyPage from "../pages/CompanyPage";
import SearchPage from "../pages/SearchPage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage></MainPage>}></Route>
          <Route path={"/ready"} element={<Ready></Ready>}></Route>
          <Route path={"/jobpost/:id"} element={<JobPage />}></Route>
          <Route path={"/oauth"} element={<KakaoLogin></KakaoLogin>}></Route>
          <Route
            path={"/companypage"}
            element={<CompanyPage></CompanyPage>}></Route>
          <Route path={"/searchpage"} element={<SearchPage></SearchPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
