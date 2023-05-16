import styled from "styled-components";

export default styled.div`
  font-family: "Lobster Two", cursive;
  font-size: 3rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 2rem;
  }
`;
