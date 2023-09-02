import { 
    ManagWrap
 } from "@/styles/common/management.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Management = ()=>{

    const settings = {
        centerMode: true,
		centerPadding: '450px',
		slide: 'li',
		infinite :true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: true,
		arrows:false,
		responsive : [
			{
				breakpoint: 1300,
				settings :{
					centerMode: true,
					centerPadding: '300px',
					slideToShow:3
				}
			}
		]

      };

    return(
        <ManagWrap  className="section2">
                <article>
                    <div className="content_wrap">
                        <div className="slide_area">
                            <Slider className="slide_list"  {...settings}>
                                <li className="slide_item">
                                    <a href="#" onClick={(e)=>{e.preventDefault();}} className="item">
                                        <img src="/img/open/open_img1.jpg" alt="" className="img" />
                                    </a>
                                    <div className="layer_box">
                                        <div className="left_area">
                                            <p className="title_txt">주요사업</p>
                                            <p className="info_txt">고속도로 건설,유지관리<br />및 지능화 고속도로 개발사업</p>
                                            <a href="#" onClick={(e)=>{e.preventDefault();}} className="detail_btn">
                                                자세히 보기
                                            </a>
                                        </div>
                                        <div className="right_area">
                                            <div className="list_wrap">
                                                <ul className="tab_list">
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_01.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">건설</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_02.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">유지관리</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_03.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">고속도로</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dark_bg"></div>
                                </li>
                                <li className="slide_item">
                                    <a href="#" onClick={(e)=>{e.preventDefault();}} className="item">
                                        <img src="/img/open/open_img7.jpg" alt="" className="img" />
                                    </a>
                                    <div className="layer_box">
                                        <div className="left_area">
                                            <p className="title_txt">ESG경영</p>
                                            <p className="info_txt">사회적 가치를 실현하고<br /> 공공성 강화를 위한 공사의<br /> 경영 핵심가치</p>
                                            <a href="#" onClick={(e)=>{e.preventDefault();}} className="detail_btn">
                                                자세히 보기
                                            </a>
                                        </div>
                                        <div className="right_area">
                                            <div className="list_wrap">
                                                <ul className="tab_list">
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_04.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">추진체계</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_05.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">추진내용</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_06.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">경영보고서</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dark_bg"></div>
                                </li>
                                <li className="slide_item">
                                    <a href="#" onClick={(e)=>{e.preventDefault();}} className="item">
                                        <img src="/img/open/open_img5.jpg" alt="" className="img" />
                                    </a>
                                    <div className="layer_box">
                                        <div className="left_area">
                                            <p className="title_txt">윤리·인권 경영</p>
                                            <p className="info_txt">모두 성장과 가치를 나누는<br /> 21세기 초일류 기업</p>
                                            <a href="#" onClick={(e)=>{e.preventDefault();}} className="detail_btn">
                                                자세히 보기
                                            </a>
                                        </div>
                                        <div className="right_area">
                                            <div className="list_wrap">
                                                <ul className="tab_list">
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_07.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">윤리경영</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_08.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">인권경영</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_09.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">주요활동</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dark_bg"></div>
                                </li>
                                <li className="slide_item">
                                    <a href="#" onClick={(e)=>{e.preventDefault();}} className="item">
                                        <img src="/img/open/open_img4.png" alt="" className="img" />
                                    </a>
                                    <div className="layer_box">
                                        <div className="left_area">
                                            <p className="title_txt">사회공헌</p>
                                            <p className="info_txt">'길을 열어 행복한 세상을'<br />나눔문화 확산에 기여하고<br /> 있습니다</p>
                                            <a href="#" onClick={(e)=>{e.preventDefault();}} className="detail_btn">
                                                자세히 보기
                                            </a>
                                        </div>
                                        <div className="right_area">
                                            <div className="list_wrap">
                                                <ul className="tab_list">
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_10.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">슬로건</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_11.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">추진체계</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="tab_item">
                                                        <a href="#" onClick={(e)=>{e.preventDefault();}} className="item_detail">
                                                            <div className="img_area">
                                                                <img src="/img/layer_icon/icon_12.svg" className="icon" />
                                                            </div>
                                                            <div className="txt_area">
                                                                <p className="txt">활동</p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dark_bg"></div>
                                </li>
                            </Slider>
                        </div>
                    </div>
                </article>
        </ManagWrap>
    );
}

export default Management;