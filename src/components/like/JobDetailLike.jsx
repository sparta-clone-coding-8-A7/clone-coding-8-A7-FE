// eslint-disable-next-line

import React, { useEffect } from "react";

import "./JobDetailLike.scss";

import heart from "../../assets/heart.png";
import love from "../../assets/love.png";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  __toggleLike,
  __toggleLikeNum,
} from "../../redux/modules/jobDetailSlice";

const JobDetailLike = () => {
  const id = useParams();
  const dispatch = useDispatch();

  // post
  const postisLike = useSelector((state) => state.jobDetailSlice.isLike.like);
  console.log(postisLike);

  // post
  const postlikeNumber = useSelector(
    (state) => state.jobDetailSlice.isLike.likeNum
  );
  console.log(postlikeNumber);

  // get
  const getIsNumber = useSelector((state) => state.jobDetailSlice.isNum);
  console.log(getIsNumber);

  const onisLike = async () => {
    dispatch(__toggleLike(parseInt(id.id)));
  };

  useEffect(() => {
    dispatch(__toggleLikeNum(parseInt(id.id)));
  }, []);

  return (
    <div className="jobDetailLike__Container">
      {postisLike && postisLike ? (
        <>
          <img
            className="jobDetailLike__Container__likeHeart"
            onClick={onisLike}
            src={heart}
            alt="heart"
          />
          {postlikeNumber ? postlikeNumber : `${getIsNumber}`}
        </>
      ) : (
        <>
          <img
            className="jobDetailLike__Container__likeHeart"
            onClick={onisLike}
            src={love}
            alt="love"
          />
          {postlikeNumber ? postlikeNumber : `${getIsNumber}`}
        </>
      )}
    </div>
  );
};

export default JobDetailLike;
