import styled from "styled-components";

export default styled.div`
  border-top: 1px solid lightgrey;
  text-align: bottom;
  .star {
    color: var(--color-primary);
  }
  .rating-wrapper {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    > * {
      margin: 0;
    }
  }
`;
