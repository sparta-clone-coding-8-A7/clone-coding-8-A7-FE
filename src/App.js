import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./route/Router";
import Search from "./components/search/Search";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <Search></Search> */}
      <Router></Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
