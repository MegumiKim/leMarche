import ButtonStyled from "./Button.styled";

export default function Button(props) {
  return <ButtonStyled onClick={props.handleClick}>{props.text}</ButtonStyled>;
}
