import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
}

html {
  height: 100%;
  --color-primary: #1d9f9d;
  --color-text:#4e4e4e;
  --gradient:"linear-gradient(25deg,rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)";
}

body{
  color: grey;
  font-family: 'Quicksand', sans-serif;
  font-size: 1em;
  margin:0;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

main{
  max-width: 1200px;
  padding: 2rem;
}
img{
  max-width: 100%;
}

main{
  min-height: 80vh;
  // max-width: 1200px;
  margin:auto;
}

h1{
  font-size: 3rem;
}
p{
  font-size: 18px;
  line-height:1.5;
}

a{
  text-decoration: none;
}

li::marker {
  content: none;
}

`;
export default GlobalStyle;
