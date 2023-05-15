import { useContext } from "react";
import { CartContext } from "../../context/Context";
import { Link } from "react-router-dom";
import BaseButton from "../../components/ui/Button/Button.styled";
import Cart from "../../components/ui/Cart";

export default function CartPage() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const total = state["total"];
  const dispatch = GlobalState.dispatch;
  const item = 1;

  return (
    <main>
      <h1>View Cart</h1>

      {!total && <h2>No Item in the cart</h2>}
      <Cart showQty="true" />
      {total > 0 && (
        <Link to="/checkout">
          <BaseButton
            onClick={() => dispatch({ type: "Checkout", payload: item })}
          >
            Check Out
          </BaseButton>
        </Link>
      )}
    </main>
  );
}
