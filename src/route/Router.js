import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import JobPage from "../pages/JobPage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage></MainPage>}></Route>
          <Route path={"/jobseeker"} element={<JobPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
