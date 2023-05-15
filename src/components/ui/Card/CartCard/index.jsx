import { useContext } from "react";
import { CartContext } from "../../../../context/Context";
import { FaTrash } from "react-icons/fa";
import { CardStyledSmall } from "../Card.styled";

export default function CartCard(props) {
  const item = props.item;
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const checkout = state["checkout"];
  console.log(checkout);
  const dispatch = GlobalState.dispatch;

  return (
    <CardStyledSmall key={item.id} className="card">
      <img src={item.imageUrl}></img>
      <h3>{item.title}</h3>
      <div>NOK {item.price}</div>
      {!checkout && (
        <div className="qty-wrapper">
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
          <FaTrash
            onClick={() => dispatch({ type: "Remove", payload: item })}
          />
        </div>
      )}
    </CardStyledSmall>
  );
}