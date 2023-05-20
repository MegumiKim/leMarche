import styled from "styled-components";

export const CardStyledSmall = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 20px;
  border-top: lightgrey 1px solid;

  > * {
    flex: 1;
  }

  .img-wrapper {
    width: 100px;
    height: 100px;
    overflow: hidden;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  img {
    max-width: none;
  }

  .product-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .qty-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    button {
      margin: 0;
    }
  }

  .bin:hover {
    color: var(--color-primary);
  }

  p {
    flex: auto;
    text-align: end;
  }

  .price-wrapper {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`;
