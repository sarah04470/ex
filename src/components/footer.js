import { FooterWrap } from "@/styles/common/footer.styles";

 const Footer = ()=>{
    return(
        <FooterWrap>
            <div className="foot_tabWrap">
                <div className="foot_tab_area">
                    <div className="tab_area">
                        <ul className="tab_list">
                            <li className="tab_item selected">
                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                    이용약관
                                </a>
                            </li>
                            <li className="tab_item">
                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                    개인정보처리방침
                                </a>
                            </li>
                            <li className="tab_item">
                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                    WISET 정보공개
                                </a>
                            </li>
                            <li className="tab_item">
                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                    윤리경영
                                </a>
                            </li>
                            <li className="tab_item">
                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                    찾아오시는 길
                                </a>
                            </li>
                        </ul>
                        <ul className="icon_list">
                            <li className="icon_item selected">
                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                    <img src="/img/facebook_icon.png" alt=""/>
                                </a>
                            </li>
                            <li className="icon_item">
                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                    <img src="/img/youtube_icon.png" alt=""/>
                                </a>
                            </li>
                            <li className="icon_item">
                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                    <img src="/img/blog_icon.png" alt=""/>
                                </a>
                            </li>
                            <li className="icon_item">
                                <a href="#" onClick={(e) => {e.preventDefault();}} className="item">
                                    <img src="/img/post_icon.png" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="foot_infoWrap">
                <div className="foot_info_area">
                    <div className="info_logo">
                       <img src="/img/ex_logo_03.svg" />
                    </div>
                    <div className="info_txt">
                        <p className="add_tel">
                            <span className="address">우) 39660 경상북도 김천시 혁신8로 77(율곡동, 한국도로공사)</span>
                            <span className="tel"><span>Tel</span>. 1588-2504</span>
                        </p>
                        <p class="copyright">COPYRIGHT ⓒ 2014 Korea Expressway Corporation. All Rights reserved.</p>
                    </div>
                    <div className="info_bann">
                        <img src="/img/wa_mark.png" />
                    </div>
                </div>
            </div>
        </FooterWrap>
    );
}

export default Footer;