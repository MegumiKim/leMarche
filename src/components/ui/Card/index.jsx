import CardStyled from "./Card.styled";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to={`product/${props.id}`}>
      <CardStyled>
        <img src={props.img} alt={props.title} />
        <div>
          <h3>{props.title}</h3>
          <p>NOK {props.price}</p>
        </div>
      </CardStyled>
    </Link>
  );
}
