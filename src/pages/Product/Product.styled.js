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
  // .price {
  //   font-weight: bold;
  //   display: flex;
  //   gap: 0.5rem;
  //   text-align: center;
  //   margin-bottom: 1rem;
  // }
  // p {
  //   margin: 0;
  // }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
