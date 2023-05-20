import styled from "styled-components";

export default styled.div`
  .cart-wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    align-content: right;
  }
  a {
    text-align: center;
  }
  .total {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 2px solid grey;
    text-align: right;
    font-size: 1.8rem;
  }
  .shipping {
    text-align: end;
    margin-top: 0;
  }

  Link {
    align-items: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .cart-wrapper {
      padding: 0;
    }
  }
`;
