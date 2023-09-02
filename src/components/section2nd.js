
import styled from "@emotion/styled";
import Management from "@/components/management";
import Custcom from "@/components/custCom";
import classNames from "classnames";
import { useState } from "react";

const Section2 = ()=>{

    const [ currentTab , clickTab ] = useState(0);

    const tabMenu = [
        {name: '열린경영', content: '윤리적 책임을 다함으로서 모든 이해관계자와 함께 성장 발전하여 신뢰받는 국민기업이 되겠습니다.'},
        {name: '고객소통', content: '항상 고객을 존중하며 고객의 눈높이에서 고객중심경영을 실현하기 위하여 최선을 다하겠습니다.' }
    ];
    const MAPPING_OBJ = {
        0: <Management />,
        1: <Custcom />
      };
      
    const selectMenuHandler = (index) =>{
        clickTab(index);
    };

    

    // 온클릭했을때 클래스에 selected 추가/제거 & tab fadein fadeout 
  
  return(
    <Section2nd>
        <div className="textWrap">
            <div className="titleWrap">
                {tabMenu.map((el, index)=>(
                    <p className={index === currentTab ? "title selected" : "title"} onClick={()=>selectMenuHandler(index)}>
                        {el.name}
                    </p>
                ))}
            </div>
            <div className="infoWrap">
                {tabMenu.map((el, index)=>(
                    <p>
                        {tabMenu[currentTab].content}
                    </p>
                ))}
            </div>
        </div>
        <div className="contentWrap">
            {MAPPING_OBJ[currentTab]}
        </div>
    </Section2nd>
  );
}

export default Section2;

const Section2nd = styled.section`
    font-family: 'Noto Sans KR', sans-serif; padding: 90px 0;  background:#f8f8f8;

    & .textWrap{
        margin: 0 auto; width: 750px; display: flex; flex-direction: column; gap: 30px; position: relative; padding-bottom: 24px;
    }
    & .textWrap .titleWrap{
        display: flex; flex-direction: row; justify-content: space-around;
    }
    & .textWrap .titleWrap .title{ font-size: 24px; font-weight: 700; color: #aaa; cursor: pointer; }
    & .textWrap .titleWrap .title:hover{ color: #666; cursor: pointer; }
    
    & .textWrap .titleWrap .title.selected{ color: #000; }

    & .textWrap .infoWrap{ text-align: center; }
    & .textWrap .infoWrap p{ font-size: 16px; cursor: default; }
    & .textWrap .infoWrap p:last-of-type{ display: none; }

    & .textWrap::before{
        content: ''; background-color: #444; left: 180px; right: 180px; height: 3px; position: absolute; bottom: 0; border-radius: 1.5px;
    }


    & .contentWrap{  }
    & .contentWrap .content{ 
        display: none;
     }
    & .contentWrap .content.selected{ 
        animation: cls 0.3s forwards; animation-delay: 1s;
     }
     @keyframes cls {
        0%{opacity:0;}
        100%{opacity:1;}
     }
`;