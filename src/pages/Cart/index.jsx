import { Helmet } from "react-helmet";
import Cart from "../../components/ui/Cart";

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>LeMarche | My Cart</title>
      </Helmet>
      <main>
        <h1>View Cart</h1>
        <Cart />
      </main>
    </>
  );
}
