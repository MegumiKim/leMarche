import styled from "styled-components";

export default styled.main`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  align-items: center;
  div {
    flex: 1;
  }

  .product--descriptions {
    padding: 20px;
  }
  .price {
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
