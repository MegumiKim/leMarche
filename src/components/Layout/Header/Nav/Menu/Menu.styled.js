import styled from "styled-components";

export default styled.div`
  cursor: pointer;
  z-index: 10;

  ul {
    position: absolute;
    top: 75px;
    right: 0px;
    padding: 20px 40px 20px 20px;
    /* background-color: var(--color-primary); */
    background: var(--gradient);
    border-radius: 0 0 0 40px;
  }

  li {
    margin: 0 0 10px 10px;
  }

  li:hover {
    text-decoration: underline;
  }
`;
