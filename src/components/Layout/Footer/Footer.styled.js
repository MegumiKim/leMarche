import styled from "styled-components";

export default styled.footer`
  background: ${({ theme }) => theme.colors.gradient};

  color: #fff;
  max-width: 100%;
  padding: 50px 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
