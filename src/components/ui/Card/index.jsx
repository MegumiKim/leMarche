import { useEffect, useState } from "react";
import CardStyled from "./Card.styled";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { price, discountedPrice } = props;
  const discountedRate = Math.ceil((price / discountedPrice - 1) * 100);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setDiscount(discountedRate), [];
  });

  return (
    <Link to={`product/${props.id}`}>
      <CardStyled>
        {discountedRate > 0 && <span> {discountedRate} % off</span>}

        <img src={props.img} alt={props.title} />

        <div className="card-text">
          <h3>{props.title}</h3>

          {discount > 0 ? (
            <div className="price">
              <strike>NOK {price}</strike>
              <p>NOK {discountedPrice}</p>
            </div>
          ) : (
            <p>NOK {price}</p>
          )}
        </div>
      </CardStyled>
    </Link>
  );
}
