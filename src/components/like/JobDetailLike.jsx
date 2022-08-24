// eslint-disable-next-line

import React, { useEffect } from "react";

import "./JobDetailLike.scss";

import heart from "../../assets/heart.png";
import love from "../../assets/love.png";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  __toggleLike,
  __getToggleLike,
} from "../../redux/modules/jobDetailSlice";

const JobDetailLike = () => {
  const id = useParams();
  const dispatch = useDispatch();

  // post
  const postisLike = useSelector((state) => state.jobDetailSlice.isLike.like);
  console.log("postlike", postisLike);

  // post
  const postlikeNumber = useSelector(
    (state) => state.jobDetailSlice.isLike.likeNum
  );
  console.log("postnumber", postlikeNumber);

  // get
  const isNumber = useSelector((state) => state.jobDetailSlice.isNum.likeNum);
  console.log("isnumber", isNumber);

  const isLike = useSelector((state) => state.jobDetailSlice.isNum.like);
  console.log("isLike", isLike);

  const onisLike = async () => {
    dispatch(__toggleLike(parseInt(id.id)));
  };

  useEffect(() => {
    dispatch(__getToggleLike(parseInt(id.id)));
  }, [postisLike]);

  return (
    <div className="jobDetailLike__Container">
      {postisLike || isLike ? (
        <div className="jobDetailLike__Container__heart">
          <img
            className="jobDetailLike__Container__likeHeart"
            onClick={onisLike}
            src={heart}
            alt="heart"></img>
          <p>{postlikeNumber ? postlikeNumber : `${isNumber}`}</p>
        </div>
      ) : (
        <div className="jobDetailLike__Container__heart">
          <img
            className="jobDetailLike__Container__likeHeart"
            onClick={onisLike}
            src={love}
            alt="love"></img>
          <p>{postlikeNumber ? postlikeNumber : `${isNumber}`}</p>
        </div>
      )}
    </div>
  );
};

export default JobDetailLike;
