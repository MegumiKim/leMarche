import styled from "styled-components";

export default styled.div`
  margin: auto;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  background-image: url("./images/hero2.jpg");
  height: 600px;
  background-position: cover;
  background-repeat: no-repeat;
  position: relative;

  h1 {
    text-shadow: black 0px 0px 20px;
    position: absolute;
    top: 45%;
    right: -50%;
    left: -50%;
    font-size: 3rem;
    font-family: "Lobster Two", cursive;
    margin: auto;
    color: #fff;
  }
`;
