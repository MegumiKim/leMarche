import { useContext } from "react";
import { CartContext } from "../../context/Context";

import CheckoutForm from "./CheckoutForm";
import CheckoutStyled from "./Checkout.styled";
import CheckoutProduct from "./CheckoutProduct";

export default function Checkout() {
  const state = useContext(CartContext)["state"];
  const total = state.total;
  const items = state.item;

  const cartItems = items.map((item) => {
    console.log(item);

    return <CheckoutProduct key={item.id} item={item} />;
  });

  return (
    <CheckoutStyled>
      <h1>Checkout</h1>

      <div className="container">
        <section>
          <h2>Payment Details</h2>
          <CheckoutForm />
        </section>
        <section>
          <h2>Order Confirmation</h2>
          {cartItems}
          <div className="total">Total : NOK {total.toFixed(2)}</div>
        </section>
      </div>
    </CheckoutStyled>
  );
}
