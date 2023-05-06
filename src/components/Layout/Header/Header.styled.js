import styled from "styled-components";

export default styled.header`
  background: ${({ theme }) => theme.colors.bg};
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  font-size: 1.5rem;
  max-width: 100%;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
