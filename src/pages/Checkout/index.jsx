import { useContext } from "react";
import { CartContext } from "../../context/Context";
import CheckoutForm from "../../components/ui/Forms/CheckoutForm";
import CheckoutProduct from "../../components/ui/Card/CheckoutProduct";
import formatInKrone from "../../utils/formatInKrone";
import Cart from "../../components/ui/Cart";

export default function Checkout() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const total = state.total;
  const items = state.item;

  const checkoutItems = items.map((item) => {
    return <CheckoutProduct key={item.id} item={item} />;
  });
  return (
    <main>
      <h1>Checkout</h1>
      <div className="flex-container-main">
        <section>
          <h2>Payment Details</h2>
          <CheckoutForm />
        </section>
        <section>
          <h2>Order Confirmation</h2>
          <Cart />
        </section>
      </div>
    </main>
  );
}
