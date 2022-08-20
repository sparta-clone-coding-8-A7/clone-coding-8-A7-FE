import React from 'react'
import { BrowserRouter,Route,Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage></MainPage>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router