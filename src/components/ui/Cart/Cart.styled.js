import styled from "styled-components";

export default styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  align-content: right;

  a {
    text-align: center;
  }

  .total {
    margin-top: 2rem;
    padding-top: 0.5rem;
    border-top: 2px solid grey;
    text-align: right;
    font-size: 1.8rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
