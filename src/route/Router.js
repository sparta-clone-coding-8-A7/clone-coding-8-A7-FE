import React from 'react'
import { BrowserRouter,Route,Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import Ready from '../pages/Ready';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage></MainPage>}></Route>
                <Route path={'/ready'} element={<Ready></Ready>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router