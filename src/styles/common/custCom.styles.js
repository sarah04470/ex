import styled from "@emotion/styled";

export const CustComWrap = styled.div`
    margin: 0 auto; background:#f8f8f8; box-sizing:border-box;

`;

export const NoticeWrap = styled.div`
    display: flex; flex-direction: row; justify-content: space-between; gap: 80px; width: 1140px; margin: 0 auto; padding:50px 0 50px 0;

    & .noticeArea, .pressReleaseArea{ width: 530px; display: flex; flex-direction: column; gap: 20px; background-color: #fff; transition: all 0.15s; padding: 20px; border-radius: 20px; }

    & .noticeArea:hover, .pressReleaseArea:hover{ box-shadow: 0px 10px 13px 0 rgba(0, 0, 0, 0.08); transform: translateY(-5px); }
    & .noticeTxtArea, .pressReleaseTxtArea{ display: flex; justify-content: space-between; align-items: center;  }

    & .noticeTxtArea div:first-of-type, .pressReleaseTxtArea div:first-of-type{ font-size: 16px; font-weight: 700; cursor: default; }
    & .noticeTxtArea div:last-of-type, .pressReleaseTxtArea div:last-of-type{ font-size: 14px; font-weight: 500; }
    & .noticeTxtArea a, .pressReleaseTxtArea a{ text-decoration: none; color: #000; }
    & .noticeTxtArea a span, .pressReleaseTxtArea a span{ transition: all 0.15s; padding-left: 5px; }
    /* & .noticeTxtArea a:hover div, .pressReleaseTxtArea a:hover span{ transform: rotate(90deg); } */
  
    & .noticeTableArea, .pressReleaseTableArea{  }
  
    & .ntWrap, .prtWrap{ display: flex; flex-direction: column; }
    & .ntList, .prtList{ border-bottom: 1px solid #ddd; }
    & .ntList:first-of-type, .prtList:first-of-type{ border-top: 2px solid #444; }
  
    & .ntList a, .prtList a{ display: flex; flex-direction: row; justify-content: space-between; color: #000; text-decoration: none; font-size: 14px; padding: 15px 5px; }
    & .ntList:hover a, .prtList:hover a{ /* text-decoration: underline; */ font-weight: 500; }
    & .ntList a span:first-of-type, .prtList a span:first-of-type{ width:400px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

`;

export const OneClickWrap = styled.div`
  background-color: none; padding:50px 0 50px 0;
`;

export const OneClickTitleWrap = styled.div`
  display: flex; flex-direction: column; gap: 20px; align-items: center;
`;

export const OneClicktitle = styled.span`
  font-size: 18px; color: #000;
`;

export const OneClickSlideWrap = styled.div`
  width: 1200px; height: 240px; background-color: none; margin: 0 auto; z-index: 0; position: relative;

  /* & > div:first-of-type{
    margin: 0 auto; width: 1280px; height: inherit; display: flex; overflow: hidden; gap: 50px; top: 50%; left: 50%;
  } */

  & > div:first-of-type{
    width: 1080px; height: inherit; margin: 0 auto; padding-top: 40px;
  }

  & ul{ outline: none; }

  & li{ display: block; float: left; padding: 0 20px; }
  /* & li:nth-of-type(6n-5){ padding-left: 0; }
  & li:nth-of-type(6n){ padding-right: 0; } */
  & li:hover a{ transform: translateY(-10px); font-weight: bold; }
  & li:hover a > span:first-of-type { background: none; box-shadow: 0px 10px 13px 0 rgba(0, 0, 0, 0.08); }

  & a{
    width: 140px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; align-items: center; color: #000;  transition: 0.15s ease-in-out; font-size: 14px;
  }

  & a > span:first-of-type{
    width: 120px; height: 120px; background-color: none; border-radius: 25px; display: block; margin: 0 auto; transition: 0.2s ease-in-out;
  }
  
  & a > span:first-of-type > span{
    width: inherit; height: inherit; transition:all 0.15s; display: block; top: 0; position: absolute; padding: 10px;
  }
  & a > span img{
    width: 100px; height: 100px; margin: 0 auto;
  }
  
  & li a > span:first-of-type >span:first-of-type{ opacity: 1; transition: ease-in-out; }
  & li a > span:first-of-type >span:last-of-type{ opacity: 0; transition: ease-in-out; }
  & li:hover a > span:first-of-type >span:first-of-type{ opacity: 0; }
  & li:hover a > span:first-of-type >span:last-of-type{ opacity: 1; }

  & button{ position: absolute; }

  /* Slick */

  .slick-list{
    width: 1140px; margin: 0 auto;
  }


  /* Arrows */
  .slick-prev, .slick-next
  {
      font-size: 0; line-height: 0;
      position: absolute; top: 50%;
      display: block;
      width: 20px; height: 20px; padding: 0; margin-top: -23px; -webkit-transform: translate(0, -50%); -ms-transform: translate(0, -50%); transform: translate(0, -50%);
      cursor: pointer;
      color: transparent; border: none; outline: none; background: transparent;
  }
  .slick-prev:hover, .slick-prev:focus,
  .slick-next:hover,.slick-next:focus
  {
      color: transparent; outline: none; background: transparent;
  }
  .slick-prev:hover:before, .slick-prev:focus:before,
  .slick-next:hover:before, .slick-next:focus:before { opacity: 1; }
  
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before { opacity: .25; }

  .slick-prev:before, .slick-next:before
  {
      font-family: 'Nanum Gothic'; font-size: 40px; line-height: 1;
      opacity: .75; color: #444;
      -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev { left: -40px; }
  [dir='rtl'] .slick-prev { right: -40px; left: auto; }
  .slick-prev:before { content: '<'; }
  [dir='rtl'] .slick-prev:before { content: '>'; }

  .slick-next { right: -40px; }
  [dir='rtl'] .slick-next { right: auto; left: -40px; }
  .slick-next:before { content: '>'; }
  [dir='rtl'] .slick-next:before { content: '<'; }

  /* Dots */
  & .slick-dots{ left: 50%; margin-left: -90px; bottom: -5px; display: inline-block; width: 180px; box-sizing: border-box;  }
  /* & .slick-dots{ padding: 30px 0 0 0; text-align: center; box-sizing: border-box; } */
  /* & .slick-dots li{ display: inline-block; margin: 0 0 0 30px; } */
  & .slick-dots li{ box-sizing: border-box; padding: 0 40px 0 0 !important; }
  & .slick-dots li:last-of-type{ padding: 0 0 0 0 !important; }
  & .slick-dots li button{ margin: 0; padding: 0; width: 12px; height: 12px; }
  & .slick-dots li button::before{ content: ''; font-size: 0; border: none; outline: 0; background-color: #444; width: 12px; height: 12px; transition: all 0.3s; border-radius: 100%; cursor: pointer; }
  & .slick-dots li.slick-active button:before{ border-radius: 0; animation: rotate 0.5s forwards; animation-delay: 0.2s; }
  @keyframes rotate{
        0%{transform:rotate(0);}
        100%{transform:rotate(45deg);}
    }

`;