import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
}

html {
  height: 100%;
  --color-primary:#f995b5;
  --color-text:#4e4e4e;
  --gradient:linear-gradient(25deg,#fc6b98 0%, rgba(253, 187, 45, 1) 100%);
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
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
}

.container{

}
section{
  flex: 1;
  margin: 0 auto;
}

img{
  max-width: 100%;
}

h1{
  font-size: 3rem;
}
p{
  font-size: 18px;
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

  .loader{
    text-align: center;
    margin-left: 2rem;
  }

  .product--descriptions {
    padding: 20px;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
}

@media (max-width: ${({ theme }) => theme.mobile}) {


  h1{
    font-size:1.5rem;
  }

  main{
    padding: 0;
  }
    
  }
`;
export default GlobalStyle;
