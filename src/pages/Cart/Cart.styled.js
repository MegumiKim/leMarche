import styled from "styled-components";

export default styled.main`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;


  .card{
display: flex;
justify-content: space-between;
align-items: center;


  
    img {
width: 100px;
height: 100px;
    }
  }

  }
  .quantity {
    display: flex;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
