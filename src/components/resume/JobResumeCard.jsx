// eslint-disable-next-line

import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./JobResumeCard.scss";

// import { __uploadFile } from "../../redux/modules/jobDetailSlice";

import JobDetailLike from "../like/JobDetailLike";
import axios from "axios";

const JobResumeCard = () => {
  const dataServer = process.env.REACT_APP_DATA;

  const { id } = useParams();
  const jobPostId = parseInt(id);

  console.log(jobPostId);

  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const name = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  console.log(selectedFile);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("formData", selectedFile);
    formData.append("name", localStorage.getItem("username"));
    formData.append("email", localStorage.getItem("email"));

    console.log([...formData]);

    for (let value of formData.values()) {
      console.log(value);
    }

    try {
      // const Refreshtoken = localStorage.getItem("refreshtoken");
      // const Authorization = localStorage.getItem("authorization");

      const response = await axios.post(
        dataServer + `/jobPost/${jobPostId}/apply`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="jobApplyCard_Container">
      <div className="jobApplyCard_Container__userContainer">
        <h3>지원자 정보</h3>
        <label
          htmlFor="name"
          className="jobApplyCard_Container__userContainer__username">
          <h4>이름</h4>
          <div className="jobApplyCard_Container__userContainer__username__name">
            {name}
          </div>
        </label>
        <label
          htmlFor="name"
          className="jobApplyCard_Container__userContainer__email">
          <h4>이메일</h4>
          <div className="jobApplyCard_Container__userContainer__email__account">
            {email}
          </div>
        </label>
      </div>
      <div className="jobApplyCard_Container__fileContainer">
        <form onSubmit={handleSubmit} id="form">
          <input
            type="file"
            name="file"
            onChange={handleFileSelect}
            className="jobApplyCard_Container__fileContainer__file"
          />
          {isFilePicked ? (
            <div className="jobApplyCard_Container__fileContainer__desc">
              <p>파일명: {selectedFile.name}</p>
              <p>파일종류: {selectedFile.type}</p>
              <p>파일크기: {selectedFile.size}</p>
              {/* <p>
                lastModifiedDate:{" "}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p> */}
            </div>
          ) : (
            <p>
              <br />
              이력서를 업로드 해주세요
            </p>
          )}
          <input
            className="jobApplyCard_Container__fileContainer__button"
            type="submit"
            value="지원하기"
          />
        </form>
      </div>
      <JobDetailLike />
    </div>
  );
};

export default JobResumeCard;
