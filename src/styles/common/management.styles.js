import styled from "@emotion/styled";

export const ManagWrap = styled.section`
    padding:0 0 84px 0; background:#f8f8f8; box-sizing:border-box;

    & .icon{ width: 32px; height: 32px; }
    
    article{}
    article .content_wrap{padding:50px 0 50px 0;}
    article .content_wrap .slide_area{}
    article .content_wrap .slide_list{height:610px;}
    article .content_wrap .slide_list .slide_item{margin:0 20px; height:610px;  position:relative; border-radius:12px; overflow:hidden;}
    article .content_wrap .slide_list .slide_item .item{display:block; width:100%; height:100%; border-radius:12px; overflow:hidden; transform: scale(0.8); transition:all 0.5s;}
    article .content_wrap .slide_list .slide_item .item img{width:100%; height:620px; object-fit:cover;}
    article .content_wrap .slide_list .slick-dots{padding:30px 0 0 0; text-align:center; box-sizing:border-box; bottom:-100px;}
    article .content_wrap .slide_list .slick-dots li{display:inline-block; margin:0 0 0 30px;}
    article .content_wrap .slide_list .slick-dots li:first-of-type{margin:0;}
    article .content_wrap .slide_list .slick-dots li button::before{width:12px; height:12px; border-radius:100%; font-size:0; border:none; outline:0; background:#444; cursor:pointer; transition:all 0.3s;}
    article .content_wrap .slide_list .slick-dots li.slick-active button::before{border-radius:0; animation:rotate 0.5s forwards; animation-delay: 0.2s;}
    @keyframes rotate{
        0%{transform:rotate(0);}
        100%{transform:rotate(45deg);}
    }
    .content_wrap .slide_list .slide_item .layer_box{width:250px; height:250px; padding:10px 10px; background:#fff; border:1px solid #ddd; border-radius:12px; box-sizing:border-box; position:absolute; left:50px; bottom:120px; opacity:0; transition:all 0.5s; z-index:1;}
    .content_wrap .slide_list .slide_item .layer_box:after{content:''; display:block; clear:both;}
    .content_wrap .slide_list .slide_item .layer_box .left_area{float:left; }
    .content_wrap .slide_list .slide_item .layer_box .left_area .title_txt{padding:25px 0 0 20px; font-size:25px; font-weight:700; color:#595757;}
    .content_wrap .slide_list .slide_item .layer_box .left_area .info_txt{padding:30px 0 0 20px; font-size:15px; font-weight:400; color:#595757; line-height:1.5;}
    .content_wrap .slide_list .slide_item .layer_box .left_area .detail_btn{margin:30px 0 0 20px;display:inline-block; font-size:14px; color:#bbb; text-decoration:none; }
    .content_wrap .slide_list .slide_item .dark_bg{width:100%; height:100%; background:rgba(0,0,0,0.2); position:absolute; left:0; top:0; opacity:0; transition:all 0.8s;}
    .content_wrap .slide_list .slick-center{position:relative; z-index:99; }
    .content_wrap .slide_list .slick-center .item{transform: scale(1.2) !important; transition:all 1s !important;}
    .content_wrap .slide_list .slick-center .layer_box{bottom:170px; opacity:1;}
    .content_wrap .slide_list .slick-center .layer_box:hover{width:calc(100% - 100px);}
    .content_wrap .slide_list .slick-center .layer_box:hover .right_area .list_wrap{ display: block; }
    .content_wrap .slide_list .slick-center .layer_box:hover .right_area:before{height:128px;}
    .content_wrap .slide_list .slick-center .dark_bg{opacity:1;}
    .content_wrap .slide_list .slide_item .layer_box .right_area{margin:0 0 0 250px; padding:66px 0 65px 30px; position:relative;}
    .content_wrap .slide_list .slide_item .layer_box .right_area:before{content:''; display:block; width:1px; height:0; background:#bbb; position:absolute; left:0; top:50px; transition:all 0.3s;}
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap{ display: none; }
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list{font-size:0;}
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item{width:33.3333%; height:98px; padding:0 15px; box-sizing:border-box; display:inline-block; font-size:14px; font-weight:500; text-align:center; transition:all 0.15s;}
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item .item_detail{display:block; width:100%; height:100%; border-radius:15px; overflow:hidden; transition:all 0.15s; text-decoration:none; }
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item .item_detail:hover{background:#f4f4f4;}
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item .item_detail.selected{background:#36b580; box-shadow:0 10px 18px 0 rgba(0,0,0,0.15);}
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item .item_detail.selected .img_area svg .cls-2{fill:#fff;}
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item .item_detail.selected .txt_area .txt{color:#fff;}
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item .item_detail .img_area{margin:20px 0 0 0;}
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item .item_detail .img_area img{width:32px; height:32px; fill:#7b8092; margin:0 auto;}
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item .item_detail .img_area img *{fill:#7b8092;}
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item .item_detail .txt_area{margin:15px 0 0 0;}
    .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item .item_detail .txt_area .txt{font-size:14px; font-weight:500; color:#222; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
    @media screen and (max-width:1670px){
        .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item{width:50%;}
        .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item:last-of-type{display:none;}
    }
    @media screen and (max-width:1570px){
        .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item{width:100%;}
        .content_wrap .slide_list .slide_item .layer_box .right_area .list_wrap .tab_list .tab_item:first-of-type{display:none;}
    }
    @media screen and (max-width:1470px){
        .content_wrap .slide_list .slide_item .layer_box .right_area{display:none;}
        .content_wrap .slide_list .slick-center .layer_box{left:50%; margin:0 0 0 -125px;}
        .content_wrap .slide_list .slick-center .layer_box:hover{width:250px;}
        .content_wrap .slide_list .slick-center .layer_box:hover .right_area:before{height:0;}
    }
    @media screen and (max-width:1300px){
        .content_wrap .slide_list .slick-center .layer_box{left:50px; margin:0;}
        .content_wrap .slide_list .slick-center .layer_box .right_area{display:block;}
        .content_wrap .slide_list .slick-center .layer_box:hover{width: calc(100% - 100px);}
        .content_wrap .slide_list .slick-center .layer_box:hover .right_area:before{height:128px;}
    }
    @media screen and (max-width:1170px){
        .content_wrap .slide_list .slide_item .layer_box .right_area{display:none;}
        .content_wrap .slide_list .slick-center .layer_box{left:50%; margin:0 0 0 -125px;}
        .content_wrap .slide_list .slick-center .layer_box:hover{width:250px;}
        .content_wrap .slide_list .slick-center .layer_box:hover .right_area:before{height:0;}
    }

`;