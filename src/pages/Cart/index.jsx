import { useContext } from "react";
import { CartContext } from "../../context/Context";
import CartStyled from "./Cart.styled";
import CartCard from "./CartCard";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

export default function Cart() {
  const GlobalState = useContext(CartContext);

  const state = GlobalState.state;
  // const dispatch = GlobalState.dispatch;
  const total = state["total"];

  const cartItems = state["item"].map((item) => {
    return <CartCard key={item.id} item={item} />;
  });

  return (
    <CartStyled>
      <h1>View Cart</h1>
      {!total && <div>You have no item</div>}
      {cartItems}
      <div className="total">Total: {total.toFixed(2)}</div>
      {total && (
        <Link to="/checkout">
          <Button text="Checkout" />
        </Link>
      )}
    </CartStyled>
  );
}
