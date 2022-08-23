import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Ready from "../pages/Ready";
import JobPage from "../pages/JobPage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage></MainPage>}></Route>
          <Route path={"/ready"} element={<Ready></Ready>}></Route>
          <Route path={"/jobpost/:id"} element={<JobPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
