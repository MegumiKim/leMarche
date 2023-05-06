import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartStyled from "./Cart.styled";
export default function Cart() {
  return (
    <CartStyled>
      <Link to="/Cart">
        <FaShoppingCart />
      </Link>
    </CartStyled>
  );
}
