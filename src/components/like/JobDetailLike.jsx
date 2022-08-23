// eslint-disable-next-line

import React from "react";

import "./JobDetailLike.scss";

import heart from "../../assets/heart.png";
import love from "../../assets/love.png";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { __toggleLike } from "../../redux/modules/jobDetailSlice";

const JobDetailLike = () => {
  const { jobPostId } = useParams();
  const dispatch = useDispatch();

  // const [clickedLike, setClickedLike] = useState(false);

  // const toggleLike = () => {
  //   setClickedLike(!clickedLike);
  // };

  // useEffect(() => {
  //   dispatch(__getPost(postId));
  // }, [dispatch, postId, isLike]);

  const isLike = useSelector((state) => state.jobDetailSlice.like);
  console.log(isLike);
  const likeNumber = useSelector((state) => state.jobDetailSlice.likeNum);
  console.log(likeNumber);

  const onisLike = async () => {
    dispatch(__toggleLike(parseInt(jobPostId)));
  };

  return (
    <div className="jobDetailLike__Container">
      {/* {clickedLike ? (
        <img
          className="jobDetailLike__Container__likeHeart"
          onClick={toggleLike}
          src={heart}
          alt="heart"
        />
      ) : (
        <img
          className="jobDetailLike__Container__likeHeart"
          onClick={toggleLike}
          src={love}
          alt="love"
        />
      )} */}
      {isLike ? (
        <>
          <img
            className="jobDetailLike__Container__likeHeart"
            onClick={onisLike}
            src={heart}
            alt="heart"
          />
          <p>{likeNumber}</p>
        </>
      ) : (
        <>
          <img
            className="jobDetailLike__Container__likeHeart"
            onClick={onisLike}
            src={love}
            alt="love"
          />
          <p>{likeNumber}</p>
        </>
      )}
    </div>
  );
};

export default JobDetailLike;
