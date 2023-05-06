import styled from "styled-components";

export default styled.div`
  cursor: pointer;

  ul {
    position: fixed;
    right: 0px;
    background: ${({ theme }) => theme.colors.bg};
    background: ${({ theme }) => theme.colors.gradient};
    padding: 20px 40px 20px 20px;
  }

  li {
    margin: 10px 0;
  }
`;
