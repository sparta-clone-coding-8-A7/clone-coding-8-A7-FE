// eslint-disable-next-line

import React from "react";

import "./JobDetailLike.scss";

import heart from "../../assets/heart.png";
import love from "../../assets/love.png";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { __toggleLike } from "../../redux/modules/jobDetailSlice";

const JobDetailLike = () => {
  const id = useParams();
  const dispatch = useDispatch();

  const isLike = useSelector((state) => state.jobDetailSlice.like);
  // console.log(isLike);
  const likeNumber = useSelector((state) => state.jobDetailSlice.likeNum);
  // console.log(likeNumber);

  const onisLike = async () => {
    dispatch(__toggleLike(parseInt(id.id)));
  };

  return (
    <div className="jobDetailLike__Container">
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
