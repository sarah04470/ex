import styled from "@emotion/styled";

/*section1 css*/
export const Section1stWrap = styled.section`
height:100vh; background:url(img/main_section_img1.jpg) no-repeat center center; background-size:cover; background-attachment: fixed; overflow:hidden;
& article{height:inherit;}
`;

export const Section1_header = styled.header`
& {position:relative; z-index:1;}
& .nav_area{max-width:1400px; height:500px; margin:0 auto; padding:70px 50px 0; box-sizing:border-box; position:relative; z-index:1;} 
& .nav_area .left_area{font-size:0; white-space:nowrap;}
& .nav_area .left_area .logo{display:inline-block; width:73px; height:42px;}
& .nav_area .left_area .logo svg{width:73px; height:auto;}
& .nav_area .left_area .logo svg .cls-1,.cls-2{transition:all 0.15s;}
& .nav_area .left_area .main_menu{display:inline-block; vertical-align:top; margin:0 0 0 110px;}
& .nav_area .left_area .main_menu .menu_list:hover .menu_item .sub_list{}
& .nav_area .left_area .main_menu .menu_list:hover .menu_item .sub_list .sub_item .item{}
& .nav_area .left_area .main_menu .menu_list .menu_item{width:130px; display:inline-block; margin:0 0 0 40px; position:relative; text-align:center;}
& .nav_area .left_area .main_menu .menu_list .menu_item:first-of-type{margin:0;}
& .nav_area .left_area .main_menu .menu_list .menu_item .item{font-size:18px; font-weight:400; color:#fff; text-decoration:none;}
& .nav_area .left_area .main_menu .menu_list .menu_item .item:hover{color:#000 !important;}
& .nav_area .left_area .main_menu .menu_list .menu_item .sub_list{width:100%;height:0; position:absolute; top:59px; left:0; text-align:center; overflow:hidden; transition:all 0.1s;}
& .nav_area .left_area .main_menu .menu_list .menu_item .sub_list .sub_item{margin:0 0 20px 0;}
& .nav_area .left_area .main_menu .menu_list .menu_item .sub_list .sub_item .item{font-size:15px; font-weight:400; display:block; line-height:1.2;}
& .side_bg{width:100%; height:0px; background:rgba(255,255,255,1); position:absolute; left:0; top:0; transition:all 0.3s;}

& .nav_area .left_area .logo.grow svg .cls-1,& .nav_area .left_area .logo.grow svg .cls-2{fill:#000;}
& .nav_area .left_area .main_menu .menu_list.grow .menu_item .item{color:#000;}
& .nav_area .left_area .main_menu .menu_list.grow .menu_item .sub_list{height:340px;}
& .nav_area .left_area .main_menu .menu_list.grow .menu_item .sub_list .sub_item .item{color:#000;}
& .side_bg.grow{height:500px;}
& .nav_area.over{}
`;

export const Section1_contents = styled.div`
width:380px; height:220px; position:absolute; left:50%; top:50%; margin:-122px 0 0 -190px; z-index:0; overflow:hidden; text-align:center;
& p{width:100%; font-size:2.6rem; font-weight:700; color:#fff;position:absolute;  }
& p.title_first{animation:txt_slide1 4s ease-in-out infinite alternate; animation-delay: 2s; transform:translate(0,40%);}
& p.title_second{animation:txt_slide2 4s ease-in-out infinite alternate; animation-delay: 2s; transform:translate(0,200%);}
@keyframes txt_slide1{
	0%,10%,20%{
		transform:translate(0,40%);
		opacity: 1;
	}
	70%,80%,90%,100%{
		transform: translate(0,-200%);
		opacity: 0;
	}
}
@keyframes txt_slide2{
	0%,10%,20%{
		transform: translate(0,200%);
		opacity: 0;
	}
	70%,80%,90%,100%{
		transform: translate(0,40%);
		opacity: 1;
	}
}
`;