import React from "react";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container__top">
        <div className="footer__container__top__menu">
          <div className="footer__container__top__menu__logo">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
              alt="footer_wanted"
            />
          </div>
          <div className="footer__container__top__menu__text">
            <a href="">채용</a>
            <a href="">회사등록</a>
            <a href="">채용등록</a>
            <a href="">내정보</a>
          </div>
        </div>
        <div className="footer__container__top__sns">
          <a href="">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100"
              alt="insta"
            />
          </a>
          <a href="">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100"
              alt="youtube"
            />
          </a>
          <a href="">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100"
              alt="facebook"
            />
          </a>
          <a href="">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100"
              alt="blog"
            />
          </a>
          <a href="">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=100"
              alt="katalk"
            />
          </a>
          <a href="">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100"
              alt="unknown"
            />
          </a>
          <a href="">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100"
              alt="appstore"
            />
          </a>
          <a href="">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100"
              alt="android"
            />
          </a>
        </div>
      </div>
      <div className="footer__container__bottom">
        <p className="footer__container__bottom__pTag">
          (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
          롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
          <br />
          유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외)
          서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118
          <br />© Wantedlab, Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
