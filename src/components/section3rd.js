
import {CustomerComWrap,ReferenceRoomWrap,ReferenceRoomTitleWrap,ReferenceRoomTitleWrap2,DisclosureWrap,DisclosureTxt,ArchiveIntegrityWrap,ArchiveIntegrityTxt} from "@/styles/common/section3rd.styles";

const Section3rd = ()=>{

  return(
        <CustomerComWrap>
            <ReferenceRoomWrap>
            <ReferenceRoomTitleWrap>
                <span className="referenceRoomTitle">
                  자료실
                </span>
            </ReferenceRoomTitleWrap>
            <ReferenceRoomTitleWrap2>
                <p>신뢰있는 정보를 토대로 고객과함께 올바르고 바른길로 갈 수 있는 기업이 되겠습니다.</p>
            </ReferenceRoomTitleWrap2>
            <DisclosureWrap>
                <DisclosureTxt>
                <span className="titleKo">정보공개</span>
                <span className="titleEn">Disclosure</span>
                </DisclosureTxt>
                <div className="">
                <ul className="">
                    <li className="">
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
                        <span>
                        <span>{/* 그레이스케일 */} <img src="/img/icon_02/icon_d_01_g.png" alt="" /></span>
                        <span>{/* 호버 */} <img src="/img/icon_02/icon_d_01.png" alt="" /></span>
                        </span>
                        <span>사전공표정보</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
                        <span>
                        <span>{/* 그레이스케일 */} <img src="/img/icon_02/icon_d_02_g.png" alt="" /></span>
                        <span>{/* 호버 */} <img src="/img/icon_02/icon_d_02.png" alt="" /></span>
                        </span>
                        <span>사업실명제</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
                        <span>
                        <span>{/* 그레이스케일 */} <img src="/img/icon_02/icon_d_03_g.png" alt="" /></span>
                        <span>{/* 호버 */} <img src="/img/icon_02/icon_d_03.png" alt="" /></span>
                        </span>
                        <span>경영공시</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
                        <span>
                        <span>{/* 그레이스케일 */} <img src="/img/icon_02/icon_d_04_g.png" alt="" /></span>
                        <span>{/* 호버 */} <img src="/img/icon_02/icon_d_04.png" alt="" /></span>
                        </span>
                        <span>교통통계</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
                        <span>
                        <span>{/* 그레이스케일 */} <img src="/img/icon_02/icon_d_05_g.png" alt="" /></span>
                        <span>{/* 호버 */} <img src="/img/icon_02/icon_d_05.png" alt="" /></span>
                        </span>
                        <span>고속도로<br/>공공데이터</span>
                    </a>
                    </li>
                </ul>
                </div>
            </DisclosureWrap>
            <ArchiveIntegrityWrap>
                <ArchiveIntegrityTxt>
                <span className="titleKo">청렴 자료실</span>
                <span className="titleEn">Archive Integrity</span>
                </ArchiveIntegrityTxt>
                <div>
                <ul>
                    <li>
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
                        <span>
                        <span>{/* 그레이스케일 */} <img src="/img/icon_02/icon_ai_01_g.png" alt="" /></span>
                        <span>{/* 호버 */} <img src="/img/icon_02//icon_ai_01.png" alt="" /></span>
                        </span>
                        <span>수의계약</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
                        <span>
                        <span>{/* 그레이스케일 */} <img src="/img/icon_02/icon_ai_02_g.png" alt="" /></span>
                        <span>{/* 호버 */} <img src="/img/icon_02//icon_ai_02.png" alt="" /></span>
                        </span>
                        <span>자체감사</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
                        <span>
                        <span>{/* 그레이스케일 */} <img src="/img/icon_02/icon_ai_03_g.png" alt="" /></span>
                        <span>{/* 호버 */} <img src="/img/icon_02//icon_ai_03.png" alt="" /></span>
                        </span>
                        <span>업무추진비</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
                        <span>
                        <span>{/* 그레이스케일 */} <img src="/img/icon_02/icon_ai_04_g.png" alt="" /></span>
                        <span>{/* 호버 */} <img src="/img/icon_02//icon_ai_04.png" alt="" /></span>
                        </span>
                        <span>사규 제ㆍ개정</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
                        <span>
                        <span>{/* 그레이스케일 */} <img src="/img/icon_02/icon_ai_05_g.png" alt="" /></span>
                        <span>{/* 호버 */} <img src="/img/icon_02//icon_ai_05.png" alt="" /></span>
                        </span>
                        <span>청렴도 측정결과</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
                        <span>
                        <span>{/* 그레이스케일 */} <img src="/img/icon_02/icon_ai_06_g.png" alt="" /></span>
                        <span>{/* 호버 */} <img src="/img/icon_02//icon_ai_06.png" alt="" /></span>
                        </span>
                        <span>부패방지 평가결과</span>
                    </a>
                    </li>
                </ul>
                </div>
            </ArchiveIntegrityWrap>
            </ReferenceRoomWrap>
        </CustomerComWrap>
  );
}

export default Section3rd;
