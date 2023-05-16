import styled from "styled-components";

export default styled.div`
  margin: 2rem;

  .flex-container-main {
    height: 70vh;
  }
  .img-wrapper {
    height: 100%;
    margin: auto;
    overflow: hidden;
    text-align: center;
    /* object-position: center center;
    object-fit: cover; */
  }

  img {
    max-width: none;
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
    padding: 0 2rem;
  }
`;
