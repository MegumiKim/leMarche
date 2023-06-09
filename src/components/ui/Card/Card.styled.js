import styled from "styled-components";

export default styled.div`
  cursor: pointer;
  border-radius: 5%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow: hidden;
  position: relative;

  h3 {
    margin-top: 0;
  }

  img {
    width: 100%;
    height: 65%;
    object-position: center center;
    object-fit: cover;
    overflow: hidden;
  }

  .card-text {
    height: 30%;
    padding: 0.5rem 1rem;
  }

  span {
    position: absolute;
    background-color: #fff;
    display: block;
    width: 100%;
    color: red;
    text-align: center;
    line-height: 2rem;
  }
  p {
    margin: 0;
  }
`;
