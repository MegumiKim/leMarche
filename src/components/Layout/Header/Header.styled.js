import styled from "styled-components";

export default styled.header`
  width: 100%;
  z-index: 10;
  color: white;
  background-color: var(--color-primary);
  background: ${({ theme }) => theme.colors.gradient};
  font-size: 1.5rem;
  padding: 20px 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  a {
    color: white;
  }
`;
