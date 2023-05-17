import { CardStyledSmall } from "../CartCard/CartCardStyled";

export default function CheckoutProduct(props) {
  const item = props.item;

  return (
    <CardStyledSmall key={item.id} className="card-small">
      <div className="img-wrapper">
        <img src={item.imageUrl} alt={item.title}></img>
      </div>
      <h3>{item.title}</h3>
      <div>NOK {item.price}</div>
      <p>Qty: {item.quantity}</p>
    </CardStyledSmall>
  );
}
