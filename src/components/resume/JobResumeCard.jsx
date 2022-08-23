// eslint-disable-next-line

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./JobResumeCard.scss";

import { __uploadFile } from "../../redux/modules/jobDetailSlice";

import JobDetailLike from "../like/JobDetailLike";

const JobResumeCard = () => {
  const { id } = useParams();
  const jobPostId = parseInt(id);

  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const dispatch = useDispatch();

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  console.log(selectedFile);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fileUpload = new FormData();
    fileUpload.append("selectedFile", selectedFile);
    for (let value of fileUpload.values()) {
      console.log(value);
    }

    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    dispatch(__uploadFile({ fileUpload, username, email, jobPostId }));
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
            {username}
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
        <form onSubmit={handleSubmit}>
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
