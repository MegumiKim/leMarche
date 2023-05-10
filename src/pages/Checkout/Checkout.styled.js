import styled from "styled-components";

export default styled.main`
  .container {
    display: flex;
    gap: 2rem;
    justify-content: space-around;

    div{
      flex: 1;
    }
    .card{
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    
      img{
        width: 50px;
      }


  }
  .total{
    margin-top: 1rem;
    padding-top: 0.5rem;
    border-top: 2px solid grey;
    text-align: right;
    font-size: 1.8rem;
  }
`;
