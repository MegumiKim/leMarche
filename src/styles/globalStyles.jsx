import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
}

html {
  height: 100%;
  --color-primary:#f995b5;
  /* --color-primary: #1d9f9d; */
  --color-text:#4e4e4e;
  --gradient:linear-gradient(25deg,#fc6b98 0%, rgba(253, 187, 45, 1) 100%);
  /* --gradient:"linear-gradient(25deg,rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)"; */
}

body{
  color: grey;
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  margin:0;
}

#root >div{
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

main{
  max-width: 1200px;
  padding: 2rem;
  /* margin: auto; */
}

section{
  flex: 1;
}
img{
  max-width: 100%;
}

h1{
  font-size: 3rem;
}
p{
  font-size: 18px;
  // line-height:1.5;
}

a{
  text-decoration: none;
  color: grey;
}

li::marker {
  content: none;
}

.discount{
  color:red;
}



.flex-container-main{
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  align-items: baseline;
  
 >* {
text-align: top;
    flex: 1;
  }

  .product--descriptions {
    padding: 20px;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
}

@media (max-width: ${({ theme }) => theme.mobile}) {
  body{
    font-size: 16px;
  }

  h1{
    font-size:2rem;
  }

    
  }
`;
export default GlobalStyle;
