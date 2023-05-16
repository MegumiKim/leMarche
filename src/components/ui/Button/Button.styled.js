import styled from "styled-components";

const BaseButton = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-weight: bold;
  padding: 15px 60px;
  background-color: var(--color-primary);
  // color: ${({ color }) => color || "#fff"};
  color: #fff;
  margin-right: 1rem;
  margin-bottom: 1rem;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const SecondaryBtn = styled(BaseButton)`
  background-color: #fff;
  color: var(--color-primary);
  border: 3px solid var(--color-primary);
`;
export const MiniBtn = styled(SecondaryBtn)`
  background-color: #fff;
  color: var(--color-primary);
  border: 3px solid var(--color-primary);
  padding: 5px 10px;
  margin: auto;
`;

export default BaseButton;
