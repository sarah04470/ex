import styled from "@emotion/styled";


export const FooterWrap = styled.footer`
background:#111 ;
& .foot_tabWrap{border-bottom:1px solid rgba(255,255,255,0.3 ); }
& .foot_tabWrap .foot_tab_area{ max-width:900px; margin:0 auto; }
& .foot_tabWrap .foot_tab_area .tab_area{padding:32px 0; display: flex; flex-direction: row; justify-content: space-between; align-items:center;}
& .foot_tabWrap .foot_tab_area .tab_area .tab_list{font-size:0;}
& .foot_tabWrap .foot_tab_area .tab_area .tab_list .tab_item{display:inline-block; padding:0 20px; position:relative; }
& .foot_tabWrap .foot_tab_area .tab_area .tab_list .tab_item:first-of-type{padding-left:0;}
& .foot_tabWrap .foot_tab_area .tab_area .tab_list .tab_item:last-of-type{padding-right:0;}
& .foot_tabWrap .foot_tab_area .tab_area .tab_list .tab_item:before{content:''; display:block; width:1px; background:#fff; position:absolute; right:0; top:6px; bottom:6px;}
& .foot_tabWrap .foot_tab_area .tab_area .tab_list .tab_item:last-of-type:before{display:none;}
& .foot_tabWrap .foot_tab_area .tab_area .tab_list .tab_item.selected .item{color:#fff;}
& .foot_tabWrap .foot_tab_area .tab_area .tab_list .tab_item .item{display:block; font-size:16px; font-weight:400; color:rgba(255,255,255,0.6); text-decoration:none; transition:color 0.15s;}
& .foot_tabWrap .foot_tab_area .tab_area .tab_list .tab_item .item:hover{color:rgba(255,255,255,0.8);}
& .foot_tabWrap .foot_tab_area .tab_area .icon_list{font-size:0;}
& .foot_tabWrap .foot_tab_area .tab_area .icon_list .icon_item{display:inline-block; padding:0 10px; position:relative; }
& .foot_tabWrap .foot_tab_area .tab_area .icon_list .icon_item .item{display:inline-block; width: 40px; height: 40px; border-radius:100%; box-sizing:border-box; text-align:center; transition:all 0.15s;}
& .foot_tabWrap .foot_tab_area .tab_area .icon_list .icon_item:hover:nth-of-type(1) .item{background:#1877f2;}
& .foot_tabWrap .foot_tab_area .tab_area .icon_list .icon_item:hover:nth-of-type(2) .item{background:#ea3223;}
& .foot_tabWrap .foot_tab_area .tab_area .icon_list .icon_item:hover:nth-of-type(3) .item{background:#03c75a;}
& .foot_tabWrap .foot_tab_area .tab_area .icon_list .icon_item:hover:nth-of-type(4) .item{background:#03c75a;}
& .foot_tabWrap .foot_tab_area .tab_area .icon_list .icon_item .item img{display:inline-block; width: 22px; height: 22px; vertical-align:top; margin:10px 0 0 0;}
& .foot_tabWrap .foot_tab_area .tab_area .icon_list .icon_item:hover:nth-of-type(2) .item img{margin:9px 0 0 0;}


& .foot_infoWrap{padding:33px 0;}
& .foot_infoWrap .foot_info_area{display:flex; justify-content:center; font-size:0;}
& .foot_infoWrap .foot_info_area .info_logo{margin:3px 50px 0 0; vertical-align:top;}
& .foot_infoWrap .foot_info_area .info_logo img{width:220px; height:25px; opacity:0.8;}
& .foot_infoWrap .foot_info_area .info_txt{line-height:1.8; vertical-align:top;}
& .foot_infoWrap .foot_info_area .info_txt .add_tel{}
& .foot_infoWrap .foot_info_area .info_txt .add_tel .address{display:inline-block; padding:0 20px 0 0; font-size:14px; font-weight:400; color:rgba(255,255,255,1); position:relative;}
& .foot_infoWrap .foot_info_area .info_txt .add_tel .address:before{content:''; display:block; width:1px; background:#fff; position:absolute; right:0; top:7px; bottom:6px;}
& .foot_infoWrap .foot_info_area .info_txt .add_tel .tel{display:inline-block; padding:0 0 0 20px; font-size:14px; font-weight:400; color:rgba(255,255,255,0.8);}
& .foot_infoWrap .foot_info_area .info_txt .add_tel .tel span{color:#fff; font-weight:700;}
& .foot_infoWrap .foot_info_area .info_txt .copyright{font-size:14px; font-weight:400; color:rgba(255,255,255,0.7);}
& .foot_infoWrap .foot_info_area .info_bann{ margin:0 0 0 50px;}
& .foot_infoWrap .foot_info_area .info_bann img{width:82.5px; height:55px;}
`;