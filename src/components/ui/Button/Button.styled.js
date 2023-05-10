import styled from "styled-components";

export default styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-weight: bold;
  padding: 15px 60px;
  background-color: var(--color-primary);
  color: ${({ color }) => color || "#fff"};
  margin: auto;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
