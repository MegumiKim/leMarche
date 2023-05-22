import styled from "styled-components";

export default styled.footer`
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  width: 100%;
  padding: 50px 0px;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  p {
    margin: 0 1rem;
  }
`;
