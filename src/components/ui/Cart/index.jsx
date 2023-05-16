import { useContext } from "react";
import { CartContext } from "../../../context/Context";
import CartStyled from "./Cart.styled";
import CartCard from "../Card/CartCard";

export default function Cart() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const total = state["total"];

  const krone = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NOK",
  });

  const totalInKrone = krone.format(total);

  const cartItems = state.item.map((item) => {
    return <CartCard key={item.id} item={item} />;
  });

  return (
    <CartStyled>
      {cartItems}
      <div className="total">Total : {totalInKrone}</div>
    </CartStyled>
  );
}
