import { useContext } from "react";
import { CartContext } from "../../../../context/Context";
import { FaTrash } from "react-icons/fa";
import { MiniBtn } from "../../Button/Button.styled";
import { CardStyledSmall } from "./CartCardStyled";

export default function CartCard({ item }) {
  const GlobalState = useContext(CartContext);
  const dispatch = GlobalState.dispatch;

  return (
    <CardStyledSmall key={item.id} className="card">
      <h3>{item.title}</h3>
      <div className="product-info">
        <div className="img-wrapper">
          <img src={item.imageUrl} alt={item.title}></img>
        </div>
        <div> | NOK {item.price}</div>
      </div>
      <div className="qty-wrapper">
        <div className="qty-wrapper">
          <MiniBtn
            onClick={() => {
              if (item.quantity > 1) {
                dispatch({ type: "Decrease", payload: item });
              } else {
                dispatch({ type: "Remove", payload: item });
              }
            }}
            aria-label="Decrease by one"
          >
            -
          </MiniBtn>
          Qty: {item.quantity}
          <MiniBtn
            onClick={() => dispatch({ type: "Increase", payload: item })}
            aria-label="Increase by one"
          >
            +
          </MiniBtn>
        </div>
        <FaTrash
          className="bin"
          aria-label="Delete Item"
          onClick={() => dispatch({ type: "Remove", payload: item })}
        />
      </div>
    </CardStyledSmall>
  );
}
