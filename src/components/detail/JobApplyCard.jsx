import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./JobApplyCard.scss";

const JobApplyCard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData().formData.append(
      "selectedFile",
      selectedFile
    );
    dispatch(formData);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="jobApplyCard_Container">
      <div className="jobApplyCard_Container__buttonContainer">
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileSelect} />
          <input type="submit" value="Upload File" />
        </form>
        {/* <input
          className="jobApplyCard_Container__buttonContainer__file"
          type="file"
          name="file"
          onChange={changeHandler}
        />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>이력서를 업로드 해주세요</p>
        )}
        <button
          className="jobApplyCard_Container__buttonContainer__button"
          onClick={handleSubmission}>
          지원하기
        </button> */}
      </div>
    </div>
  );
};

export default JobApplyCard;
