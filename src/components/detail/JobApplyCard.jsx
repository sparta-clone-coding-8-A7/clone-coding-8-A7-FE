import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./JobApplyCard.scss";
import { __uploadFile } from "../../redux/modules/uploadFileSlice";

const JobApplyCard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

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
      <div className="jobApplyCard_Container__buttonContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="file"
            onChange={handleFileSelect}
            className="jobApplyCard_Container__buttonContainer__file"
          />
          {isFilePicked ? (
            <div className="jobApplyCard_Container__buttonContainer__desc">
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
            className="jobApplyCard_Container__buttonContainer__button"
            type="submit"
            value="지원하기"
          />
        </form>
      </div>
    </div>
  );
};

export default JobApplyCard;
