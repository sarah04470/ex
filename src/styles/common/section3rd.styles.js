import styled from "@emotion/styled";



export const CustomerComWrap = styled.section`
  margin: 0 auto; width: 100%;  font-family: 'Noto Sans KR', sans-serif; padding: 90px 0;
`;


export const ReferenceRoomWrap = styled.div`
  display: flex; flex-direction: column; gap: 30px;
`;

export const ReferenceRoomTitleWrap = styled.div`
  display: flex; flex-direction: column; gap: 30px; align-items: center;

  & .referenceRoomTitle { font-size: 24px; font-weight:700; color: #000; }
`;
export const ReferenceRoomTitleWrap2 = styled.div`
  text-align:center; position:relative; padding:0 0 24px 0;
  &:before {content: ''; background-color: #444; left: 523.5px; right: 523.5px; height: 3px; position: absolute; bottom: 0; border-radius: 1.5px;}
  & .referenceRoomTitle { font-size: 16px; color: #000; }
  
`;

export const DisclosureWrap = styled.div`
  width: 1260px; height: 300px; background-color: #8a8a8a; border-radius: 20px; margin: 20px auto 0; padding: 0 90px; display: flex; justify-content: space-between; align-items: center; z-index: 0; transition: background 0.15s;

  &:hover{ background-color: #529acc; }

  & ul{
    display: flex; flex-direction: row; gap: 30px; align-items: center;
  }

  & li{
    position: relative; height: 300px; overflow: hidden;
  }

  & li::before{
    content: ""; display: block; width: 160px; height: 90%; background-color: #084184; z-index: -1; position: absolute; top: -90%; border-radius: 0 0 20px 20px; transition: 0.15s ease-in-out;
  }

  & li:hover::before{
    top:0;
  }

  & a{
    width: 160px; z-index: 100; text-align: center; text-decoration: none; color: #fff; display: block; position: relative; top: 50%; margin-top: -60px;
  }

  & a > span:first-of-type{
    width: 100px; height: 100px; background-color: #fff; border-radius: 20px; display: block; margin: 0 auto; position: relative;
  }

  & a > span:first-of-type > span{
    width: inherit; height: inherit; transition: 0.15s ease-in-out; display: block; top: 0; left: 0; position: absolute; padding: 10px;
  }

  & a > span img{
    width: 80px; height: 80px;
  }
  & li a > span:first-of-type >span:first-of-type{ opacity: 1; }
  & li a > span:first-of-type >span:last-of-type{ opacity: 0; }
  & li:hover a > span:first-of-type >span:first-of-type{ opacity: 0; }
  & li:hover a > span:first-of-type >span:last-of-type{ opacity: 1; }

  & a > span:last-child{ display: block; margin-top: 10px; transition: all 0.15s }
  & li:hover a > span:last-child{ font-weight: 700; }
`;

export const DisclosureTxt = styled.div`
  display: flex; flex-direction: column; gap: 10px;

  & .titleKo, .titleEn { font-size: 20px; font-weight: bold; color: #fff; }
`;

export const ArchiveIntegrityWrap = styled.div`
  width: 1260px; height: 400px; background-color: #3E3E3E; border-radius: 20px; margin: 0 auto; padding: 0 90px; display: flex; justify-content: space-between; align-items: center; transition: 0.15s ease-in-out;

  &:hover{ background-color: #23417B; }

  & > div:nth-of-type(2){
    width:100%; height: 100%; padding-left: 110px; overflow: hidden;
  }

  & ul{
    display: flex; flex-direction: row; gap: 0px; align-items: center; height: inherit;
  }

  & li{
    display:flex; justify-content:space-between; gap:0; position: relative; height: inherit;
  }

  & li:nth-of-type(odd){
    align-items: flex-start; padding-top: 60px;
  }
  
  & li:nth-of-type(even){
    align-items: flex-end; padding-bottom: 60px;
  }

  & li:nth-of-type(odd) a::before{
    content: ""; display: block; width: 150px; height: 220px; background-color: #529acc; z-index: -1; position: absolute; top: -280px; left: -10px; border-radius: 0 0 20px 20px; transition: 0.15s ease-in-out;
  }

  & li:nth-of-type(odd):hover a::before{
    top: -45%;
  }
  
  & li:nth-of-type(even) a::before{
    content: ""; display: block; width: 150px; height: 220px; background-color: #529ACC; z-index: -1; position: absolute; bottom: -280px; left: -10px; border-radius: 20px 20px 0 0; transition: 0.15s ease-in-out;
  }
  
  & li:nth-of-type(even):hover a::before{
    bottom: -45%;
  }

  & a{
    z-index: 100; text-align: center; text-decoration: none; color: #fff; display: block; position: relative; width: 130px;
  }

  & a > span:first-of-type{
    width: 100px; height: 100px; background-color: #fff; border-radius: 20px; display: block; margin: 0 auto;
  }

  & a > span:last-child{ display: block; margin-top: 10px; transition: all 0.15s; }
  & li:hover a > span:last-child{ font-weight: 700; }

  & a > span:first-of-type > span{
    width: inherit; height: inherit; transition: all 0.15s; display: block; top: 0; position: absolute; padding: 10px;
  }

  & a > span img{
    width: 80px; height: 80px;
  }
  & a > span:first-of-type >span:first-of-type{ opacity: 1; }
  & a > span:first-of-type >span:last-of-type{ opacity: 0; }
  & li:hover a > span:first-of-type >span:first-of-type{ opacity: 0; }
  & li:hover a > span:first-of-type >span:last-of-type{ opacity: 1; }

`;

export const ArchiveIntegrityTxt = styled.div`
  display: flex; flex-direction: column; gap: 10px;

  & .titleKo, .titleEn { font-size: 20px; font-weight: bold; color: #fff; }
`;
