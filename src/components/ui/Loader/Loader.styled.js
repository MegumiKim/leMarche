import styled from "styled-components";

export default styled.div`
  margin: auto;
  font-size: 4em;
  color: grey;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
