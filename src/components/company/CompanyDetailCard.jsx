// eslint-disable-next-line

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { __getCompanyDetail } from "../../redux/modules/jobDetailSlice";

import "./CompanyDetailCard.scss";

const CompanyDetailCard = () => {
  const id = useParams();
  // console.log(id);

  const companies = useSelector((state) => state.jobDetailSlice.companyDetail);
  // const success = useSelector((state) => state.jobDetailSlice.success);
  // console.log(companies);
  // console.log(success);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(__getCompanyDetail(id));
  // }, [dispatch, success]);

  // console.log(id.id);
  useEffect(() => {
    dispatch(__getCompanyDetail(id.id));
  }, [id, dispatch]);

  return (
    <div className="companyDetailCard__Container">
      <h2>{companies.position}</h2>
      <div className="companyDetailCard__Container__companyInfo">
        <h6>{companies.name}</h6>
        <span>{companies.location}</span>
      </div>
      <div className="companyDetailCard__Container__company">
        <h6>회사소개</h6>
        <p>{companies.content}</p>
        <h6>마감일</h6>
        <p>{companies.deadline}</p>
        <h6>기술스택</h6>
        {companies.stacks &&
          companies.stacks.map((company, i) => {
            return (
              <div className="companyDetailCard__Container__stackList" key={i}>
                <div className="companyDetailCard__Container__stackList__skill">
                  {company.name}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CompanyDetailCard;
