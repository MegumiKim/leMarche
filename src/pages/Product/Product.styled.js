import styled from "styled-components";

export default styled.main`
  .img-wrapper {
    max-height: 50vh;
    margin: auto;
    overflow: hidden;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    height: 100%;
    /* margin: auto; */
  }
  h1 {
    margin-bottom: 0;
  }
  .tags,
  .rating {
    display: flex;
    gap: 1rem;

    p {
      margin: 0;
    }
  }

  .rating {
    margin-bottom: 1rem;
  }
  .reviews {
    max-width: 1200px;
    padding: 0 2rem;
    margin: auto;
  }

  .product-price {
    font-size: 2rem;
    color: red;
  }
`;
