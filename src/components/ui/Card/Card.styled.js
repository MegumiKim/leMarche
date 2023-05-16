import styled from "styled-components";

export default styled.div`
  cursor: pointer;
  border-radius: 5%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  // align-items: center;
  height: 400px;
  color: var(--color-text);
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 70%;
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

export const CardStyledSmall = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    flex: 1;
  }

  .img-wrapper {
    width: 100px;
    height: 100px;
    overflow: hidden;
    text-align: center;
  }
  img {
    width: 100px;
  }

  .qty-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .bin:hover {
    color: darkred;
  }

  p {
    flex: auto;
    text-align: end;
  }
`;
