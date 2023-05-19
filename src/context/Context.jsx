import { createContext, useEffect, useReducer } from "react";
import cartReducer from "./cartReducer";
export const CartContext = createContext();

export const Context = (props) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    {
      item: [],
      total: 0,
    },
    () => {
      const localData = localStorage.getItem("cart");
      return localData ? JSON.parse(localData) : {};
    }
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
