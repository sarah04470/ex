import { Global, css } from "@emotion/react";

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  *{
    margin: 0;
    padding: 0;
}

ul, li{
	list-style: none;
}

#wrapping{
	min-width: 1150px;
}

`;

const GlobalStyle = ()=>{

  return(<Global styles={style}></Global>);
}

export default GlobalStyle;