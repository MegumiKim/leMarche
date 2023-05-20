import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartStyled from "./CartIcon.styled";
import { useContext } from "react";
import { CartContext } from "../../../../../context/Context";

export default function Cart() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState["state"];
  const numberOfItem = state.item.length;

  console.log(numberOfItem);
  return (
    <CartStyled>
      <Link to="/Cart">
        <FaShoppingCart />
        {numberOfItem > 0 && <span>{numberOfItem}</span>}
      </Link>
    </CartStyled>
  );
}
