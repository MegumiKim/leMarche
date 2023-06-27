import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CartStyled from "./CartIcon.styled";
import { CartContext } from "../../../../../context/Context";

export default function Cart() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state || [];
  const totalItems = state.totalItems || 0;

  console.log(totalItems);

  return (
    <CartStyled>
      <Link to="/Cart" aria-label="Check my cart">
        <FaShoppingCart />
        {totalItems > 0 && <span>{totalItems}</span>}
      </Link>
    </CartStyled>
  );
}
