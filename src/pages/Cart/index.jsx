import { useContext } from "react";
import { CartContext } from "../../context/Context";
import { Link } from "react-router-dom";
import BaseButton from "../../components/ui/Button/Button.styled";
import Cart from "../../components/ui/Cart";

export default function CartPage() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const total = state.total;

  return (
    <main>
      <h1>View Cart</h1>
      {total > 0 ? (
        <div>
          <Cart />
          <Link to="/checkout">
            <BaseButton>Check Out</BaseButton>
          </Link>
        </div>
      ) : (
        <h2>No Item in the cart</h2>
      )}
    </main>
  );
}
