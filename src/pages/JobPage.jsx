import React from "react";
import JobSwiperCard from "../components/detail/JobSwiperCard";
import JobApplyCard from "../components/detail/JobApplyCard";
import "../assets/JobPage.scss";

const JobPage = () => {
  return (
    <div className="jobPage_Container">
      <div className="jobDetailLeft">
        <JobSwiperCard />
      </div>
      {/* <div className="jobDetailRight">
        <JobApplyCard />
      </div> */}
    </div>
  );
};

export default JobPage;
