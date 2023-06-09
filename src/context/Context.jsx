import { createContext, useEffect, useReducer, useState } from "react";
import cartReducer from "./cartReducer.js";

export const CartContext = createContext();
export const QueryContext = createContext();

export const Context = (props) => {
  const initialCartState = {
    item: [],
    total: 0,
  };
  const [query, setQuery] = useState([]);
  const [state, dispatch] = useReducer(
    cartReducer,
    initialCartState,
    // Fetch cart items from local storage if exists
    () => {
      const localData = localStorage.getItem("cart");
      return localData ? JSON.parse(localData) : initialCartState;
    }
  );

  // Save cart state to local storage every time cart gets updated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <QueryContext.Provider value={{ query, setQuery }}>
        {props.children}
      </QueryContext.Provider>
    </CartContext.Provider>
  );
};
