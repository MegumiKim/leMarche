import { CardStyledSmall } from "../CartCard/CartCardStyled";

export default function CheckoutProduct(props) {
  const item = props.item;

  return (
    <CardStyledSmall key={item.id} className="card-small">
      <h3>{item.title}</h3>
      <div className="product-info">
        <div className="img-wrapper">
          <img src={item.imageUrl} alt={item.title}></img>
        </div>
        <div className="price-wrapper">
          <div>NOK {item.price}</div>
          <p>Qty: {item.quantity}</p>
        </div>
      </div>
    </CardStyledSmall>
  );
}
