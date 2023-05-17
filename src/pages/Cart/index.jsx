import { useContext } from "react";
import { CartContext } from "../../context/Context";

import Cart from "../../components/ui/Cart";

export default function CartPage() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const total = state.total;

  return (
    <main>
      <h1>View Cart</h1>
      {total > 0 ? <Cart /> : <h2>No Item in the cart</h2>}
    </main>
  );
}
