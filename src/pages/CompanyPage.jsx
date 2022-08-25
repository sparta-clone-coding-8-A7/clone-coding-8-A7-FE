import CompanyWrite from "../components/companywrite/CompanyWrite";
import React from "react";
import Header from "../components/header/Header";

const CompanyPage = () => {
  return (
    <>
      <Header></Header>
      <div className="companypage">
        <CompanyWrite></CompanyWrite>
      </div>
    </>
  );
};

export default CompanyPage;
