import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
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
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

img{
  max-width: 100%;
}

main{
  min-height: 80vh;
  max-width: 1200px;
  margin:auto;
}
p{
  line-height:1.5;
}

a{
  color: #fff;
  text-decoration: none;
}

li::marker {
  content: none;
}

`;
export default GlobalStyle;
