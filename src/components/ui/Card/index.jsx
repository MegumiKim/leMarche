import CardStyled from "./Card.styled";
import { Link } from "react-router-dom";
import Price from "../Price";

export default function Card(props) {
  const { price, discountedPrice } = props;
  const discountedRate = Math.ceil((price / discountedPrice - 1) * 100);

  return (
    <Link to={`product/${props.id}`}>
      <CardStyled>
        {discountedRate > 0 && <span> {discountedRate} % off</span>}

        <img src={props.img} alt={props.title} />
        <div className="card-text">
          <h3>{props.title}</h3>
          <Price
            price={props.price}
            discountedPrice={props.discountedPrice}
          ></Price>
        </div>
      </CardStyled>
    </Link>
  );
}
