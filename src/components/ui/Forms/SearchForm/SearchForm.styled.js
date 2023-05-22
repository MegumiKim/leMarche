import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;

  input {
    line-height: 2rem;
    border-radius: 50px;
    border: 1px solid #d5d4d8;
    text-indent: 10px;
    width: 50%;
    margin: 1rem auto;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    input {
      width: 80%;
    }
  }
`;
