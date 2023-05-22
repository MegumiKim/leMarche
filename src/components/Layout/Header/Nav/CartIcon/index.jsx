import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../../context/Context";
import { FaShoppingCart } from "react-icons/fa";
import CartStyled from "./CartIcon.styled";

export default function Cart() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState["state"];
  const numberOfItem = state.item.length;

  return (
    <CartStyled>
      <Link to="/Cart">
        <FaShoppingCart />
        {numberOfItem > 0 && <span>{numberOfItem}</span>}
      </Link>
    </CartStyled>
  );
}
