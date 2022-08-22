// eslint-disable-next-line

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { __getCompanyDetail } from "../../redux/modules/jobDetailSlice";

import "./CompanyDetailCard.scss";

const CompanyDetailCard = () => {
  const companies = useSelector((state) => state.jobDetailSlice.companyDetail);
  // const success = useSelector((state) => state.jobDetailSlice.success);
  console.log(companies);
  // console.log(success);

  const { id } = useParams();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(__getCompanyDetail(id));
  // }, [dispatch, success]);

  useEffect(() => {
    dispatch(__getCompanyDetail(id));
  }, []);

  return (
    <div className="companyDetailCard__Container">
      <h2>{companies.position}</h2>
      <div className="companyDetailCard__Container__location">
        <span>{companies.location}</span>
      </div>
      <div className="companyDetailCard__Container__company">
        <h6>회사소개</h6>
        <p>{companies.name}</p>
        <h6>마감일</h6>
        <p>{companies.deadline}</p>
        <h6>기술스택</h6>
        {companies.stack &&
          companies.stack.map((company, i) => {
            return (
              <div className="companyDetailCard__Container__stackList" key={i}>
                <div className="companyDetailCard__Container__stackList__skill">
                  {company}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CompanyDetailCard;
