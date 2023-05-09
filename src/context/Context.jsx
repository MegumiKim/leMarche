import { createContext, useReducer, useState } from "react";
import cartReducer from "./Reducer";

export const CartContext = createContext();

export const Context = (props) => {
  const [state, dispatch] = useReducer(cartReducer, { item: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
