import { Helmet, HelmetProvider } from "react-helmet-async";
import Cart from "../../components/ui/Cart";

export default function CartPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>LeMarche | My Cart</title>
        </Helmet>
      </HelmetProvider>
      <main>
        <h1>View Cart</h1>
        <Cart />
      </main>
    </>
  );
}
