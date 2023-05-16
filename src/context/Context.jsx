import { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";
export const CartContext = createContext();

export const Context = (props) => {
  const [state, dispatch] = useReducer(cartReducer, {
    item: [],
    total: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
