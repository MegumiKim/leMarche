export const initialState = { cart: [], total: 0 };

export function reducer(state, action) {
  let productIndex;
  let newTotal;
  let cart;

  // switch (action.type) {
  //   case "addProduct":
  //     cart = [...state.cart];
  //     productIndex = cart.findIndex(
  //       (product) => product.id === action.payload.id
  //     );

  //     if (productIndex === -1) {
  //       cart.push({ ...action.payload, quantity: 1 });
  //     }
  // }
}
