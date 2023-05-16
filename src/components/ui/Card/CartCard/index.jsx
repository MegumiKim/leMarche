import { useContext } from "react";
import { CartContext } from "../../../../context/Context";
import { FaTrash } from "react-icons/fa";
import { CardStyledSmall } from "../Card.styled";
import { MiniBtn } from "../../Button/Button.styled";

export default function CartCard(props) {
  const item = props.item;
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const checkout = state["checkout"];

  const dispatch = GlobalState.dispatch;

  return (
    <CardStyledSmall key={item.id} className="card">
      <div className="img-wrapper">
        <img src={item.imageUrl}></img>
      </div>
      <h3>{item.title}</h3>
      <div> | NOK {item.price}</div>
      {!checkout ? (
        <div className="qty-wrapper">
          <MiniBtn
            onClick={() => dispatch({ type: "Increase", payload: item })}
          >
            +
          </MiniBtn>
          Qty: {item.quantity}
          <MiniBtn
            onClick={() => {
              if (item.quantity > 1) {
                dispatch({ type: "Decrease", payload: item });
              } else {
                dispatch({ type: "Remove", payload: item });
              }
            }}
          >
            -
          </MiniBtn>
          <FaTrash
            className="bin"
            onClick={() => dispatch({ type: "Remove", payload: item })}
          />
        </div>
      ) : (
        <p>Qty: {item.quantity}</p>
      )}
    </CardStyledSmall>
  );
}
