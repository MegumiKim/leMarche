import CardStyled from "./Card.styled";

export default function Card(props) {
  return (
    <CardStyled>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>NOK {props.price}</p>
    </CardStyled>
  );
}
