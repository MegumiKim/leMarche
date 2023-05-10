export default function CheckoutProduct(props) {
  const item = props.item;
  return (
    <div key={item.id} className="card">
      <img src={item.imageUrl}></img>
      <h3>{item.title}</h3>
      <div>NOK {item.price}</div>
      <p>Qty: {item.quantity}</p>
    </div>
  );
}
