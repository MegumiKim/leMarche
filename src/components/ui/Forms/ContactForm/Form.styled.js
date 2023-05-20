import styled from "styled-components";

export default styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  div {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  .input-group {
    flex-direction: column;
    margin-bottom: 1rem;
  }
  label {
    flex: 1;
  }
  input,
  textarea {
    flex: 2;
    width: 100%;
    height: 2rem;
    border-radius: 50px;
    border: 1px solid #d5d4d8;
    text-indent: 10px;
  }

  textarea {
    padding-top: 5px;
    height: 6rem;
    border-radius: 20px;
  }

  Button {
    margin: auto;
    margin-top: 1rem;
  }

  .success {
    color: var(--color-primary);
  }
`;
