import { useContext } from "react";
import { CartContext } from "../../../context/Context";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CartStyled from "./Cart.styled";
import CartCard from "../Card/CartCard";
import BaseButton from "../Button/Button.styled";
import formatInKrone from "../../../utils/formatInKrone";
import CheckoutProduct from "../Card/CheckoutProduct";

export default function Cart() {
  const location = useLocation();
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state || [];
  const total = state.total || 0;

  const cartItems = state.item.map((item) => {
    return <CartCard key={item.id} item={item} />;
  });

  const checkoutItems = state.item.map((item) => {
    return <CheckoutProduct key={item.id} item={item} />;
  });
  return (
    <div>
      {total > 0 ? (
        <CartStyled>
          {location.pathname === "/Cart" ? (
            <div className="cart-wrapper">
              {cartItems}
              <div className="total">Total : {formatInKrone(total)}</div>
              <p className="shipping">*Free Shipping</p>
              <Link to="/checkout">
                <BaseButton>Check Out</BaseButton>
              </Link>
            </div>
          ) : (
            <div className="cart-wrapper">
              {checkoutItems}
              <div className="total">Total : {formatInKrone(total)}</div>
              <p className="shipping">*Free Shipping</p>
            </div>
          )}
        </CartStyled>
      ) : (
        <h2>No item in the cart</h2>
      )}
    </div>
  );
}
