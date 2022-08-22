import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./JobApplyCard.scss";

import { __uploadFile } from "../../redux/modules/jobDetailSlice";
import JobDetailLike from "../like/JobDetailLike";

const JobApplyCard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  // const user = useSelector((state) => state.userInfoSlice.user);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const sendData = formData.append("selectedFile", selectedFile);
    dispatch(__uploadFile(sendData));
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  return (
    <div className="jobApplyCard_Container">
      <div className="jobApplyCard_Container__userContainer">
        <h3>지원자 정보</h3>
        <label
          for="name"
          class="jobApplyCard_Container__userContainer__username">
          <h4>이름</h4>
          <div className="jobApplyCard_Container__userContainer__username__name">
            profile_nickname
          </div>
        </label>
        <label for="name" class="jobApplyCard_Container__userContainer__email">
          <h4>이메일</h4>
          <div className="jobApplyCard_Container__userContainer__email__account">
            account_email
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

export default JobApplyCard;
