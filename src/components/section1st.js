
import {Section1stWrap,Section1_header,Section1_contents} from "@/styles/common/section1st.styles";
import { ClassNames } from "@emotion/react";
import classNames from "classnames";
import { useState } from "react";


const Section1st = ()=>{
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
    return(
        <Section1stWrap className="section1">
            <article>
                <Section1_header>
                    <div className="nav_area" onMouseLeave={handleMouseOut}>
                        <div className="left_area">
                            <h1 className={classNames('logo',{grow : isHovering})}>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 97.35 55.28">
                                    <defs><style>{`.cls-1,.cls-2{fill:#fff;}.cls-2{opacity:.8;}`}</style></defs>
                                    <g id="logo_symbol"><g id="symbol">
                                    <path className="cls-1" d="m61.31,19.15c-2.27,2.24-4.96,2.7-8.3,2.7h-28.61c-2.28,0-4.3-1.84-5.24-4.43h-7.43c1.35,6.26,6.52,10.93,12.68,10.93h28.61c4.07,0,9.29-.55,13.63-4.81l4.68-4.61-4.89-4.81c-2.79,2.75-5.12,5.04-5.12,5.04Z"/><path className="cls-1" d="m24.4,6.49h18.65c.82,0,1.74.91,1.74,2.21s-.92,2.22-1.74,2.22h-23.89c-.36.99-.57,2.1-.57,3.25s.21,2.25.57,3.25h23.89c4.94,0,8.95-3.91,8.95-8.71S47.99,0,43.05,0h-18.65c-6.15,0-11.32,4.67-12.68,10.93h7.43c.95-2.59,2.97-4.43,5.24-4.43Z"/><path id="opacity" className="cls-2" d="m18.61,14.17c0-1.15.21-2.25.57-3.25h-.02s0-.02.01-.03h-7.44s0,.02,0,.03h-.02c-.23,1.04-.35,2.13-.35,3.25s.12,2.2.35,3.25h.02s0,.01,0,.02h7.43s0-.01,0-.02h.02c-.36-.99-.57-2.09-.57-3.25Z"/><path className="cls-1" d="m11.73,10.93H3.61c-1.99,0-3.61,1.45-3.61,3.25s1.62,3.25,3.61,3.25h8.12c-.23-1.04-.35-2.13-.35-3.25s.12-2.2.35-3.25Z"/>
                                    <path className="cls-1" d="m81.21,9.19c2.28-2.24,4.96-2.7,8.3-2.7h2.38c1.99,0,3.61-1.45,3.61-3.25s-1.62-3.25-3.61-3.25h-2.38c-4.07,0-9.3.55-13.63,4.81,0,0-2.03,1.99-4.57,4.5l4.89,4.81,5-4.93Z"/><path className="cls-1" d="m66.17,4.25c-2.06-2.03-4.63-3.58-7.48-4.15-1.94-.39-3.91.53-4.44,2.26-.53,1.73.59,3.52,2.51,4,1.62.4,2.92,1.13,4.09,2.28l5.59,5.49c1.59-1.57,3.34-3.28,4.89-4.81l-5.15-5.06Z"/><path className="cls-1" d="m91.94,21.8h-2.38c-3.34,0-6.02-.46-8.3-2.7l-5.05-4.98-4.89,4.81,4.61,4.55c4.33,4.26,9.56,4.81,13.62,4.81h2.38c1.99,0,3.61-1.45,3.61-3.25s-1.61-3.25-3.61-3.25Z"/>
                                    <path id="opacity-2" className="cls-2" d="m76.24,14.09l-4.89-4.81s-.02.02-.03.03l-.02-.02h0l-3.62,3.57-1.26,1.25.02.02s-.02.02-.02.02l4.89,4.81.03-.03.02.02c1.62-1.6,3.46-3.41,4.89-4.81l-.02-.02.03-.02Z"/></g>
                                    <g id="logo"><polygon className="cls-1" points="95.5 38.82 93.28 38.82 93.28 54.63 95.5 54.63 95.5 45.19 97.35 45.19 97.35 43.65 95.5 43.65 95.5 38.82"/>
                                    <path className="cls-1" d="m88.59,42.21v-3.26h-2.22v3.26c0,2.67-1.06,4.89-3.55,6.44l.97,1.26c1.65-.87,2.88-2.17,3.69-3.59.81,1.42,2.04,2.73,3.69,3.59l.98-1.26c-2.49-1.55-3.55-3.77-3.55-6.44Z"/><polygon className="cls-1" points="21.85 42.96 21.85 38.82 19.63 38.82 19.63 50.33 21.85 50.33 21.85 44.5 23.69 44.5 23.69 42.96 21.85 42.96"/><path className="cls-1" d="m17.66,44.09c0-1.2-.57-2.22-1.46-2.88h1.55v-1.54h-3.11v-1.4h-2.22v1.4h-3.11v1.54h1.61c-.89.66-1.46,1.68-1.46,2.88,0,2.17,1.83,3.93,4.1,3.93s4.1-1.76,4.1-3.93Zm-5.97,0c0-1.35.84-2.44,1.87-2.44s1.88,1.09,1.88,2.44-.84,2.44-1.88,2.44-1.87-1.09-1.87-2.44Z"/><path className="cls-1" d="m21.96,54.58v-1.54h-8.33v-3.43h-2.22v3.66c0,.68.54,1.31,1.4,1.31h9.15Z"/><path className="cls-1" d="m41.25,39.04v6.96c0,.68.54,1.31,1.4,1.31h2.86v4.63h-5.07v1.53h12.36v-1.53h-5.07v-4.63h4v-1.53h-8.25v-5.2h8.25v-1.53h-10.48Z"/><path className="cls-1" d="m32.64,48.68v-2.65h5.31v-1.53h-1.12v-4.15c0-.68-.54-1.31-1.4-1.31h-9.54v1.53h8.71v3.93h-9.49v1.53h5.3v2.65h-4.52v1.53h8.71v4.41h2.22v-5.95h-4.19Z"/>
                                    <path className="cls-1" d="m55.54,46.93c0,.68.54,1.31,1.4,1.31h2.97v3.69h-5.19v1.53h12.6v-1.53h-5.19v-3.69h4.12v-1.54h-8.49v-2.19h8.49v-4.16c0-.68-.54-1.31-1.4-1.31h-9.31v1.53h8.49v2.41h-8.49v3.95Z"/><path className="cls-1" d="m69.99,39.04v1.53h8.59v5.04h-3.1v-2.98h-2.22v2.98h-4.4v1.54h13.3v-1.54h-1.36v-5.27c0-.68-.54-1.31-1.4-1.31h-9.42Z"/><path className="cls-1" d="m75.44,47.98c-2.63,0-4.76,1.63-4.76,3.65s2.13,3.65,4.76,3.65,4.76-1.63,4.76-3.65-2.13-3.65-4.76-3.65Zm0,5.8c-1.4,0-2.54-.97-2.54-2.15s1.13-2.15,2.54-2.15,2.54.96,2.54,2.15-1.13,2.15-2.54,2.15Z"/>
                                    </g></g>
                                </svg>
                            </h1>
                            <div className="main_menu">
                                <ul className={classNames('menu_list',{grow : isHovering})} onMouseEnter={handleMouseOver} >
                                    <li className="menu_item">
                                        <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                            공사소개
                                        </a>
                                        <ul className="sub_list">
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    사장
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    일반현황
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    채용정보
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    홍보센터
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    연차보고서
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu_item">
                                        <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                            정보공개
                                        </a>
                                        <ul className="sub_list">
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    정보공개청구
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    사전정보공표
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    경영공시
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    사업실명제
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    고속도로<br />
                                                    공공데이터포탈
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    교통통계
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu_item">
                                        <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                            국민참여
                                        </a>
                                        <ul className="sub_list">
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    고객헌장
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    고객의소리(민원)
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    고객신고(신청)
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    고객제안
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    기업성장<br />
                                                    응답센터
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    콜센터
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    국민소통
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    터널방재<br />
                                                    인증센터
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu_item">
                                        <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                            고속도로
                                        </a>
                                        <ul className="sub_list">
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    도로정보
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    노선정보
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    교통정보
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    휴게소/영업소
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    통행요금
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    하이패스
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    교통안전
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu_item">
                                        <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                            신기술
                                        </a>
                                        <ul className="sub_list">
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    EX<br />
                                                    기술나눔마당
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    도로교통연구원
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    기술마켓
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    차세대 ITS
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    LED 인증포탈
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu_item">
                                        <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                            열린경영
                                        </a>
                                        <ul className="sub_list">
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    ESG경영
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    안전경영
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    동반성장
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    사회공헌
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    CP·윤리<br />
                                                    인권 경영
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    ESG 채권 공시
                                                </a>
                                            </li>
                                            <li className="sub_item">
                                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                                    주요사업
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right_area"></div>
                    </div>
                    <div className={classNames('side_bg',{grow : isHovering})}></div>
                </Section1_header>
                <Section1_contents className="main_title">
                    <p className="title_first">안전하고 편리한<br />미래교통 플랫폼 기업</p>
                    <p className="title_second">막힘없는<br />도로를 만듭니다</p>
                </Section1_contents>
            </article>
      </Section1stWrap>
    );
}

export default Section1st;