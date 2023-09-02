import { 
    CustComWrap, NoticeWrap, OneClickWrap, OneClickTitleWrap, OneClicktitle,  OneClickSlideWrap
 } from "@/styles/common/custCom.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Custcom = ()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      };

    return(
        <CustComWrap>
            <NoticeWrap>
                <div className="noticeArea">
                    <div className="noticeTxtArea">
                        <div>공지사항</div>
                        <div>
                            <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                more
                                <span>+</span>
                            </a>
                        </div>
                    </div>
                    <div className="noticeTableArea">
                        <ul className="ntWrap">
                            <li className="ntList">
                                <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                    <span>2023년 한국도로공사 산업혁신운동 참여기업 모집</span>
                                    <span>05-26</span>
                                </a>
                            </li>
                            <li className="ntList">
                                <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                    <span>2023년 한국도로공사 본사 기간제근로자(운전원) 채용 공고</span>
                                    <span>05-26</span>
                                </a>
                            </li>
                            <li className="ntList">
                                <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                    <span>개인정보 목적 외 이용 및 제3자 제공 알림</span>
                                    <span>05-25</span>
                                </a>
                            </li>
                            <li className="ntList">
                                <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                    <span>한국도로공사서비스(주) 사장 공모</span>
                                    <span>05-25</span>
                                </a>
                            </li>
                            <li className="ntList">
                                <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                    <span>한국도로공사 비상임이사 공모</span>
                                    <span>05-24</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pressReleaseArea">
                    <div className="pressReleaseTxtArea">
                        <div>보도자료</div>
                        <div>
                            <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                more
                                <span>+</span>
                            </a>
                        </div>
                    </div>
                    <div className="pressReleaseTableArea">
                        <ul className="prtWrap">
                            <li className="prtList">
                                <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                    <span>한국도로공사·부산박물관, 경부고속도로 역사 홍보를 위해 맞손</span>
                                    <span>05-24</span>
                                </a>
                            </li>
                            <li className="prtList">
                                <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                    <span>한국도로공사, 모바일 앱으로 3~4月 『모범 화물운전자』120명 선발</span>
                                    <span>05-23</span>
                                </a>
                            </li>
                            <li className="prtList">
                                <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                    <span>한국도로공사, 고속도로 건설참여사 CEO와 화합·협력 강화를 위한 소통의 장 마련</span>
                                    <span>05-22</span>
                                </a>
                            </li>
                            <li className="prtList">
                                <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                    <span>고속도로 동물찻길사고 5~6월 최다 발생 "자정부터 아침 8시까지 운전에 특히 주의"</span>
                                    <span>05-16</span>
                                </a>
                            </li>
                            <li className="prtList">
                                <a href="#" onClick={(e)=>{e.preventDefault();}}>
                                    <span>영동고속도로 확장공사로 동군포IC 강릉방향 진입로 4달간 전면차단 실시</span>
                                    <span>05-12</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </NoticeWrap>

            <OneClickWrap>
          <OneClickTitleWrap>
            <OneClicktitle>
              EX - 원클릭 24
            </OneClicktitle>
          </OneClickTitleWrap>
          <OneClickSlideWrap>
            <Slider {...settings} >
              <ul>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 01_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 01_02.png" alt="" /></span>
                    </span>
                    <span>미납통행료납부</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 02_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 02_02.png" alt="" /></span>
                    </span>
                    <span>민원신청</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 03_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 03_02.png" alt="" /></span>
                    </span>
                    <span>정보공개청구</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 04_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 04_02.png" alt="" /></span>
                    </span>
                    <span>직원칭찬</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 05_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 05_02.png" alt="" /></span>
                    </span>
                    <span>아이디어제안</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 06_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 06_02.png" alt="" /></span>
                    </span>
                    <span>단말기고객직접등록</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 07_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 07_02.png" alt="" /></span>
                    </span>
                    <span>국민소통</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 08_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 08_02.png" alt="" /></span>
                    </span>
                    <span>공익신고</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 09_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 09_02.png" alt="" /></span>
                    </span>
                    <span>부정부패 갑질신고</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 10_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 10_02.png" alt="" /></span>
                    </span>
                    <span>청탁금지법 위반신고</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 11_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 11_02.png" alt="" /></span>
                    </span>
                    <span>불공정 하도급신고</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 12_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 12_02.png" alt="" /></span>
                    </span>
                    <span>안전신고</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 13_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 13_02.png" alt="" /></span>
                    </span>
                    <span>예산낭비 신고</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 14_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 14_02.png" alt="" /></span>
                    </span>
                    <span>유실물 신고</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 15_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 15_02.png" alt="" /></span>
                    </span>
                    <span>인사채용 비리신고</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 16_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 16_02.png" alt="" /></span>
                    </span>
                    <span>기업민원 신고</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 17_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 17_02.png" alt="" /></span>
                    </span>
                    <span>도로점용 신고</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 18_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 18_02.png" alt="" /></span>
                    </span>
                    <span>토지보상 안내</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 19_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 19_02.png" alt="" /></span>
                    </span>
                    <span>유휴부지 안내</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 20_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 20_02.png" alt="" /></span>
                    </span>
                    <span>노면파손 배상안내</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 21_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 21_02.png" alt="" /></span>
                    </span>
                    <span>운영제한 허가안내</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 22_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 22_02.png" alt="" /></span>
                    </span>
                    <span>민간 제안사업</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 23_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 23_02.png" alt="" /></span>
                    </span>
                    <span>기술 육성지원</span>
                  </a>
                </li>
                <li>
                  <a  href="#" onClick={(e)=>{e.preventDefault();}}>
                    <span>
                      <span>{/* 그레이스케일 */} <img src="/img/icon_01/resizing2/icon_oc 24_g.png" alt="" /></span>
                      <span>{/* 호버 */} <img src="/img/icon_01/resizing2/icon_oc 24_02.png" alt="" /></span>
                    </span>
                    <span>계약실적 증명신청</span>
                  </a>
                </li>
              </ul>
            </Slider>
              {/* <button onClick={onCarouselButtonClick}>&lt;</button>
              <button onClick={onCarouselButtonClick}>&gt;</button> */}
          </OneClickSlideWrap>
        </OneClickWrap>


        </CustComWrap>
    );
}

export default Custcom;