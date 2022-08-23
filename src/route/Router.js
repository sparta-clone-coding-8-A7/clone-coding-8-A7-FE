import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Ready from '../pages/Ready';
import JobPage from "../pages/JobPage";
import KakaoLogin from "../components/login/KakaoLogin"
import Company from "../pages/Company";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<MainPage></MainPage>}></Route>
              <Route path={'/ready'} element={<Ready></Ready>}></Route>
              <Route path={"/jobpost/:jobPostId"} element={<JobPage />}></Route>
              <Route path={'/oauth'} element={<KakaoLogin></KakaoLogin>}></Route>
              <Route path={'/companywrite'} element={<Company></Company>}></Route>
          </Routes>
      </BrowserRouter>      
    </div>
  );
};

export default Router;
