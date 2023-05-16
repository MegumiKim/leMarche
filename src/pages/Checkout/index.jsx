import CheckoutForm from "../../components/ui/Forms/CheckoutForm";
import Cart from "../../components/ui/Cart";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import CartCard from "../../components/ui/Card/CartCard";
import CheckoutProduct from "../../components/ui/Card/CheckoutProduct";

export default function Checkout() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const total = state["total"];
  const items = state.item;

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
          {items.map((item) => {
            return <CheckoutProduct key={item.id} item={item} />;
          })}
          <p>Total: NOK {total}</p>
        </section>
      </div>
    </main>
  );
}
