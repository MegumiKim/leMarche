import styled from "styled-components";

export default styled.div`
  cursor: pointer;
  z-index: 10;

  ul {
    position: absolute;
    top: 75px;
    right: 0px;
    padding: 20px 40px 20px 20px;
    background: var(--gradient);
    border-radius: 0 0 0 40px;
  }

  li {
    margin: 0 0 10px 10px;
    list-style-type: none;
  }

  li:hover {
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    ul {
      position: absolute;
      top: 56px;
    }
  }
`;
