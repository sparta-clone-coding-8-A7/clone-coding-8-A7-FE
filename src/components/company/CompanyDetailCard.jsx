// eslint-disable-next-line

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { __getCompanyDetail } from "../../redux/modules/jobDetailSlice";

import "./CompanyDetailCard.scss";

const CompanyDetailCard = () => {
  // const company = useSelector((state) => state.jobDetailSlice.companyDetail);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getCompanyDetail(id));
  }, []);

  return (
    <div className="companyDetailCard__Container">
      <h2>포지션 이름</h2>
      <div className="companyDetailCard__Container__location">
        <span>회사지역</span>
      </div>
      <div className="companyDetailCard__Container__company">
        <h6>회사소개</h6>
        <p>항해99</p>
        <h6>마감일</h6>
        <p>2022년 10월4일</p>
        <h6>기술스택</h6>
        <p>
          <div className="companyDetailCard__Container__stackList">
            <div className="companyDetailCard__Container__stackList__skill">
              HTML
            </div>
            <div className="companyDetailCard__Container__stackList__skill">
              CSS
            </div>
            <div className="companyDetailCard__Container__stackList__skill">
              JAVASCRIPT
            </div>
            <div className="companyDetailCard__Container__stackList__skill">
              REACT
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default CompanyDetailCard;
