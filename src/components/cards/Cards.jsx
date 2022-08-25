// eslint-disable-next-line

import { useEffect, useState, useRef } from "react"
import axios from "axios";
import { useLocation ,useNavigate} from 'react-router-dom'
import "./Cards.scss";
    // useEffect(()=>{
    //     if(location.state !== ""){
    //         setData(location.state)
    //         navigate("/searchpage",{state:data})
    //     }
    // },[])

const Cards = ({btnOn,setBtnOn}) => {
  const navigate = useNavigate()
  let auth = localStorage.getItem("authorization");
  let token1 = localStorage.getItem("refreshtoken");

  const dataServer = process.env.REACT_APP_DATA;
  const location = useLocation();
  console.log(location.state)
  // navigate("/searchpage",{state:data})

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
    try {
      const resp = await axios.get(dataServer + `/jobPost?size=8`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
          RefreshToken: token1,
        },
      });
      const newResp = Object.keys(resp.data.data).map(
        (item) => resp.data.data[item]
      );
      setData((prev) => [...prev, ...dataRef.current, ...newResp]); // 0  12  24  36
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
    }
    setPrevY(y);
  };
  const loadingData2 = async () => {
    try {
      const resp = await axios.get(dataServer + `/jobPost?size=8`, {
        // 메인 초기 데이터
        headers: {
          "Content-Type": "application/json",
          // "Authorization":auth,
          // "RefreshToken":token1
        },
      });
      console.log([resp.data.data]);

      const newResp = Object.keys(resp.data.data).map(
        (item) => resp.data.data[item]
      );

      setData((prev) => [...prev, ...dataRef.current, ...newResp]);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  useEffect(() => {
    if (btnOn === false) {
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
  return (
    <div className="cards">
      {data &&
        data.map((user, index) => {
          return (
            <a
              key={index}
              href={`/jobpost/${user.jobPostResponseDto.id}`}
              className="card-item">
              <div className="card-item-list">
                <img src={user.jobPostResponseDto.imgUrl} alt="images"></img>
                <div className="card-title">
                  {user.jobPostResponseDto.position}
                </div>
                <div className="card-company">
                  {user.jobPostResponseDto.name}
                </div>
                <div className="company-region">
                  {user.jobPostResponseDto.location}
                </div>
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
