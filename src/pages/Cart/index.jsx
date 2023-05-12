import { useContext } from "react";
import { CartContext } from "../../context/Context";
import CartStyled from "./Cart.styled";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";
import BaseButton from "../../components/ui/Button/Button.styled";

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
      {!total && <h2>No Item in the cart</h2>}
      {cartItems}

      {total > 0 && (
        <div>
          <div className="total">Total: NOK {total.toFixed(2)}</div>
          <Link to="/checkout">
            <BaseButton>Check Out</BaseButton>
          </Link>
        </div>
      )}
    </CartStyled>
  );
}
