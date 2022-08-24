// eslint-disable-next-line
import React from "react";
import JobSwiperCard from "../components/swiper/JobSwiperCard";
import JobResumeCard from "../components/resume/JobResumeCard";
import CompanyDetailCard from "../components/company/CompanyDetailCard";
import "../assets/JobPage.scss";
import Header from "../components/header/Header";

const JobPage = () => {
  return (
    <>
      <Header></Header>
      <div className="jobPage_Container">
        <div className="jobDetailLeft">
          <JobSwiperCard />
          <CompanyDetailCard />
        </div>
        <div className="jobDetailRight">
          <JobResumeCard />
        </div>
      </div>
    </>
  );
};

export default JobPage;
