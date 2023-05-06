import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*{
  box-sizing: border-box;
}

html{
  height: 100%;
}

body{
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  margin:0;
  height: 100%;
}

img{
  max-width: 100%;
}

p{
  line-height:1.5;
}
`;
export default GlobalStyle;
