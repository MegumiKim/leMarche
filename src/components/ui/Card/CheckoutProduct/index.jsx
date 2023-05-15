import { CardStyledSmall } from "../Card.styled";

export default function CheckoutProduct(props) {
  const item = props.item;
  return (
    <CardStyledSmall key={item.id} className="card-small">
      <img src={item.imageUrl}></img>
      <h3>{item.title}</h3>
      <div>NOK {item.price}</div>
      <p>Qty: {item.quantity}</p>
    </CardStyledSmall>
  );
}
