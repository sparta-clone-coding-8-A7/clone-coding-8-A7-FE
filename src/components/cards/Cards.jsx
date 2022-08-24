// eslint-disable-next-line

import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import exImg from "../../assets/bookshelf.png";
import axios from "axios";
import "./Cards.scss";

const Cards = () => {
  // let auth = localStorage.getItem("authorization")
  // let token1 = localStorage.getItem("refreshtoken")
  const location = useLocation();
  const { state } = location; // 검색후 메인은 무한 그냥 메인은 false
  const [infinite, setInfinite] = useState(false); // 검색후 메인은 무한 그냥 메인은 false
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [prevY, setPrevY] = useState(0);

  let dataRef = useRef({}); // 데이터 업데이트 지정
  let loadingRef = useRef(null); // 맨 아래지점 지정
  let prevYRef = useRef({}); // 우리가 이동하는 지점 지정
  let pageRef = useRef({});

  pageRef.current = page;
  prevYRef.current = prevY;
  dataRef.current = data;

  const loadingData = async () => {
    setLoading(true);
    // const response = await fetch(`http://54.180.112.137:9990/api/jobPost?index=0&size=4`,{
    //     method:"GET",
    //     headers:{
    //         "Content-Type": "application/json",
    //         "Authorization":auth,
    //         "RefreshToken":token1
    //     }
    // })
    // console.log(response)
    // return response
    //     .then((response) => console.log("response:", response))
    //     .catch((error) => console.log("error:", error));
    try {
      const resp = await axios.get(
        `http://54.180.112.137:9990/api/jobPost?size=7`,
        {
          headers: {
            "Content-Type": "application/json",
            // "Authorization":auth,
            // "RefreshToken":token1
          },
        }
      );
      setData((prev) => [
        ...prev,
        ...dataRef.current,
        // ...resp.data.data.jobPostResponseDto,
      ]); // 0  12  24  36
      setLoading(false);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y;
    if (prevYRef.current > y) {
      loadingData();
      setPage(pageRef.current + 1);
    } else {
      console.log("Nothing");
    }
    setPrevY(y);
  };
  const loadingData2 = async () => {
    try {
      const resp = await axios.get(
        `http://54.180.112.137:9990/api/jobPost?size=7`,
        {
          // 메인 초기 데이터
          headers: {
            "Content-Type": "application/json",
            // "Authorization":auth,
            // "RefreshToken":token1
          },
        }
      );
      console.log([resp.data.data]);

      setData((prev) => [
        ...prev,
        ...dataRef.current,
        // ...resp.data.data.jobPostResponseDto,
      ]);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  console.log(state);
  useEffect(() => {
    if (state === null) {
      loadingData2();
    }
    if (infinite === true) {
      loadingData();
      setPage(pageRef.current + 1);
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };
      const observer = new IntersectionObserver(handleObserver, options);
      observer.observe(loadingRef.current);
    }
  }, []);
  console.log(data);
  return (
    <div className="cards">
      {data &&
        data.map((user, index) => {
          return (
            <a key={index} href={`/jobpost/${user.id}`} className="card-item">
              <div className="card-item-list">
                <img src={user.imgUrl} alt="imag"></img>
                <div className="card-title">{user.position}</div>
                <div className="card-company">{user.name}</div>
                <div className="company-region">{user.location}</div>
                {/* <div className='company-pay'>{}</div> */}
              </div>
            </a>
          );
        })}
      <div
        className={infinite === false ? "scrolldown-nope" : "scrolldown"}
        ref={loadingRef}
        style={{ height: "100px", margin: "25px" }}>
        {loading && "...Loading"}
      </div>
    </div>
  );
};

export default Cards;
