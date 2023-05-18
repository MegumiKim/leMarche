import styled from "styled-components";

export default styled.div`
  margin: auto;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  background-image: url("./images/image6.webp");
  background-position-x: right;
  background-position-y: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  display: flex;

  h1 {
    text-shadow: black 0px 0px 20px;
    font-size: 3rem;
    font-family: "Lobster Two", cursive;
    margin: auto;
    color: #fff;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 50vh;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 35vh;
  }
`;
