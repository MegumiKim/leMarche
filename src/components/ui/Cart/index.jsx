import { useContext } from "react";
import { CartContext } from "../../../context/Context";
import CartStyled from "./Cart.styled";
import CartCard from "../Card/CartCard";
import { Link } from "react-router-dom";
import BaseButton from "../Button/Button.styled";
import formatInKrone from "../../../utils/formatInKrone";
import CheckoutProduct from "../Card/CheckoutProduct";

export default function Cart() {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const total = state.total;

  const cartItems = state.item.map((item) => {
    return <CartCard key={item.id} item={item} />;
  });

  const checkoutItems = state.item.map((item) => {
    return <CheckoutProduct key={item.id} item={item} />;
  });
  return (
    <CartStyled>
      {window.location.pathname === "/Cart" ? (
        <div className="cart-wrapper">
          {cartItems}
          <div className="total">Total : {formatInKrone(total)}</div>
          <Link to="/checkout">
            <BaseButton>Check Out</BaseButton>
          </Link>
        </div>
      ) : (
        <div className="cart-wrapper">
          {checkoutItems}
          <div className="total">Total : {formatInKrone(total)}</div>
        </div>
      )}
    </CartStyled>
  );
}
