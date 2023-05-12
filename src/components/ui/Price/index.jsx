import PriceStyled from "./Price.styled";

export default function Price(props) {
  const { price, discountedPrice } = props;
  const discountedRate = Math.ceil(price / discountedPrice - 1);

  return (
    <PriceStyled>
      {discountedRate > 0 ? (
        <div>
          <strike>NOK {price}</strike>
          <p>NOK {discountedPrice}</p>
        </div>
      ) : (
        <p>NOK {price}</p>
      )}
    </PriceStyled>
  );
}
