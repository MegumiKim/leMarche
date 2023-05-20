import CheckoutForm from "../../components/ui/Forms/CheckoutForm";
import Cart from "../../components/ui/Cart";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Checkout() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>LeMarche | Checkout</title>
        </Helmet>
      </HelmetProvider>
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
    </>
  );
}
