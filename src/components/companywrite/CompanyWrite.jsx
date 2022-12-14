import React, { useEffect, useState } from "react";
import "./CompanyWrite.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const CompanyWrite = () => {
  const dataServer = process.env.REACT_APP_DATA;
  const s3Server = process.env.REACT_APP_S3;

  const [stack, setStack] = useState(null);
  const [group1, setGroup1] = useState(null);
  const [group2, setGroup2] = useState(null);
  const [stackCheck, setStackCheck] = useState(false);
  const [groupCheck1, setGroupCheck1] = useState(false);
  const [groupCheck2, setGroupCheck2] = useState(false);
  const [gotStack, setGotStack] = useState("");
  const [gotGroup1, setGotGroup1] = useState("");
  const [gotGroup2, setGotGroup2] = useState("");
  const [imageList, setImageList] = useState("");

  const [list1, setList1] = useState([]);
  const [fakeList, setFakeList1] = useState([]);

  const navigate = useNavigate();
  let auth = localStorage.getItem("authorization");
  let token1 = localStorage.getItem("refreshtoken");
  const [details, setDetails] = useState({
    position: "",
    content: "",
    deadline: "",
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageStorage, setImageStorage] = useState(null);
  const getStacks = async () => {
    try {
      const repo = await axios.get(
        dataServer + `/company/jobPost/page/stackList`,
        {
          // 직업군 카테고리 가져오기.
          headers: {
            "Content-Type": "application/json",
            Authorization: auth,
            RefreshToken: token1,
          },
        }
      );
      setStack(repo.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getImg = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("multipartFile",imageStorage)
    for (let i = 0; i < imageStorage.length; i++) {
      formData.append("multipartFile", imageStorage[i]);
    }
    try {
      const repo = await axios.post(s3Server, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: auth,
          RefreshToken: token1,
        },
      });

      setImageList(repo.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGroup = async () => {
    try {
      const repo = await axios.get(
        dataServer + `/company/jobPost/page/jobGroup`,
        {
          // 직군 카테고리 1
          headers: {
            "Content-Type": "application/json",
            Authorization: auth,
            RefreshToken: token1,
          },
        }
      );
      if (repo.data.data === null) {
        alert("로그인 이후 이용해주세요.");
      }
      setGroup1(repo.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGroup2 = async () => {
    try {
      const repo = await axios.get(
        dataServer + `/company/jobPost/page/jobDetail/${gotGroup1}`,
        {
          // 직군 카테고리 2
          headers: {
            "Content-Type": "application/json",
            Authorization: auth,
            RefreshToken: token1,
          },
        }
      );
      setGroup2(repo.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      details.position === "" ||
      details.content === "" ||
      details.deadline === ""
    ) {
      alert("내용을 모두 입력해주세요.");
    }
    const formData = new FormData();

    // const list1 = Object.values(imageList)
    // console.log("확인",typeof(list1))
    // for (let i = 0; i < imageList.length; i++) {
    //   setList1((prev)=>[...prev,imageList[i]])
    // }
    let list1 = new Array();
    for (let i = 0; i < gotStack.length; i++) {
      formData.append("stacks", gotStack[i]);
    }
    formData.append("position", details.position);
    formData.append("content", details.content);
    formData.append("imgUrlList", imageList);
    formData.append("deadline", details.deadline);
    formData.append("stacks", gotStack);
    formData.append("jobGroupId", gotGroup1);
    formData.append("jobDetailId", gotGroup2);
    try {
      await axios.post(dataServer + `/company/jobPost`, formData, {
        // 채용공고 올리기
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
          RefreshToken: token1,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onSelectFile = async (e) => {
    const selectedFiles = e.target.files;
    setImageStorage(e.target.files);
    setSelectedImages((prevImg) => prevImg.concat(imagesArray));
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
  };
  const handleStack = (id) => {
    // 스택 쌓기
    setGotStack((prev) => [...prev, id]);
  };
  const handleGroup = (id) => {
    // 그룹 1
    setGotGroup1(id);
    setGroupCheck1((prev) => !prev);
  };
  const handleGroup2 = (id) => {
    // 그룹 2
    setGotGroup2(id);
    setGroupCheck2((prev) => !prev);
  };
  const openStack = () => {
    // 스택 친구
    setStackCheck((prev) => !prev);
  };
  const openGroup = () => {
    // 그룹 1 친구
    setGroupCheck1((prev) => !prev);
  };
  const openGroup2 = () => {
    // 그룹 2 친구
    setGroupCheck2((prev) => !prev);
  };
  useEffect(() => {
    if (
      !localStorage.getItem("authorization") === true ||
      !localStorage.getItem("refreshtoken") === true
    ) {
      alert("로그인 후 이용해주세요.");
      navigate("/");
    } else {
      getStacks();
      getGroup();
    }
  }, []);
  useEffect(() => {
    if (gotGroup1 === "") {
      console.log("Not yet");
    } else {
      console.log("Ready");
      getGroup2();
    }
  }, [gotGroup1]);
  return (
    <>
      <h2>작성</h2>
      <form onSubmit={handleSubmit} className="company-write">
        <label htmlFor="포지션명">포지션명</label>
        <input type="text" name="position" onChange={handleChange}></input>

        <label htmlFor="이미지 업로드">이미지</label>
        <input
          type="file"
          name="imgUrlList"
          multiple
          accept="image/png , image/jpeg , image/webp"
          onChange={onSelectFile}></input>

        <div onClick={getImg} className="company-btn">
          이미지 업로드
        </div>
        <label htmlFor="내용 작성">내용 작성</label>
        <input type="textarea" name="content" onChange={handleChange}></input>

        <label htmlFor="마감일">마감일</label>
        <input type="text" name="deadline" onChange={handleChange}></input>

        <div onClick={openStack} className="company-stack">
          스택
        </div>
        <div className="company-btn" onClick={openStack}>
          선택 완료
        </div>
        {stackCheck === true
          ? stack.map((stacks, index) => {
              return (
                <div
                  key={index}
                  className="company-stacks"
                  onClick={() => handleStack(stacks.id)}>
                  {stacks.name}
                </div>
              );
            })
          : null}

        <div onClick={openGroup} className="company-stack">
          직군1
        </div>
        {groupCheck1 === true
          ? group1.map((groups, index) => {
              return (
                <div
                  key={index}
                  className="company-stacks"
                  onClick={() => handleGroup(groups.code)}>
                  {groups.name}
                </div>
              );
            })
          : null}
        {gotGroup1 === "" ? null : (
          <div onClick={openGroup2} className="company-stack">
            직군2
          </div>
        )}
        {groupCheck2 === true
          ? group2.map((groups, index) => {
              return (
                <div
                  key={index}
                  className="company-stacks"
                  onClick={() => handleGroup2(groups.code)}>
                  {groups.name}
                  {groups.code}
                </div>
              );
            })
          : null}
        <button type="submit">제출하기</button>
      </form>
    </>
  );
};

export default CompanyWrite;
