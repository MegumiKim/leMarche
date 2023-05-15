import CheckoutForm from "../../components/ui/Forms/CheckoutForm";
import Cart from "../../components/ui/Cart";
export default function Checkout() {
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
          <Cart showQty="false" />
        </section>
      </div>
    </main>
  );
}
