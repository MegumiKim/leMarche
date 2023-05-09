import { useContext } from "react";
import { CartContext } from "../../../context/Context";

export default function CartCard(props) {
  const item = props.item;
  const GlobalState = useContext(CartContext);

  // const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;

  return (
    <div key={item.id} className="card">
      <img src={item.imageUrl}></img>
      <h3>{item.title}</h3>
      <div>NOK {item.price}</div>
      <div>
        <button onClick={() => dispatch({ type: "Increase", payload: item })}>
          +
        </button>
        Qty: {item.quantity}
        <button
          onClick={() => {
            if (item.quantity > 1) {
              dispatch({ type: "Decrease", payload: item });
            } else {
              dispatch({ type: "Remove", payload: item });
            }
          }}
        >
          -
        </button>
        <button onClick={() => dispatch({ type: "Remove", payload: item })}>
          Remove
        </button>
      </div>
    </div>
  );
}
