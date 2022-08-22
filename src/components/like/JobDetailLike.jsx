// eslint-disable-next-line

import React, { useState } from "react";
import "./JobDetailLike.scss";
import heart from "../../assets/heart.png";
import love from "../../assets/love.png";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";

const JobDetailLike = () => {
  // const { postId } = useParams();
  // const dispatch = useDispatch();
  const [clickedLike, setClickedLike] = useState(false);

  const toggleLike = () => {
    setClickedLike(!clickedLike);
  };

  // useEffect(() => {
  //   dispatch(__getPost(postId));
  // }, [dispatch, postId, isLike]);

  // const isLike = useSelector((state) => state.jobDetailSlice.like);
  // const likeNumber = useSelector((state) => state.jobDetailSlice.like_num);

  // const onisLike = async() => {
  //   dispatch(__toggleLike(postId))
  // }

  return (
    <div className="jobDetailLike__Container">
      {clickedLike ? (
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
      )}
      {/* {isLike ? (
        <img
          className="jobDetailLike__Container__likeHeart"
          onClick={onisLike}
          src={heart}
          alt="heart"
        />
        {likeNumber}
      ) : (
        <img
          className="jobDetailLike__Container__likeHeart"
          onClick={onisLike}
          src={love}
          alt="love"
        />
        {likeNumber}
      )} */}
    </div>
  );
};

export default JobDetailLike;
