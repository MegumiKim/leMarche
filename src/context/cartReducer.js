const cartReducer = (state, action) => {
  let price = action.payload.price;
  let total = state["total"];
  // let currentItems = [...state["item"]];
  let itemToAdd = action.payload;

  const itemExits = state["item"].find((item) => item.id === itemToAdd.id);

  const updatedItems = state["item"].map((item) => {
    if (item.id === itemToAdd.id) {
      return { ...item, quantity: item.quantity + 1 };
    } else {
      return item;
    }
  });

  const decreaseItems = state["item"].map((item) => {
    if (item.id === itemToAdd.id) {
      return { ...item, quantity: item.quantity - 1 };
    } else {
      return item;
    }
  });

  switch (action.type) {
    case "Add":
      if (!itemExits) {
        return {
          item: [...state["item"], itemToAdd],
          total: total + price,
          checkout: false,
        };
      }
      return state;

    case "Increase":
      return {
        item: updatedItems,
        total: total + price,
        checkout: false,
      };
    // return tempState1;
    case "Decrease":
      return {
        item: decreaseItems,
        total: total - price,
        checkout: false,
      };
    // return tempState2;
    case "Remove":
      return {
        item: state["item"].filter((item) => item.id !== itemToAdd.id),
        total: total - itemToAdd.quantity * itemToAdd.price,
        checkout: false,
      };
    case "Checkout":
      return {
        item: state["item"],
        total: state["total"],
        checkout: true,
      };

    case "Paid":
      return {
        item: [],
        total: 0,
        checkout: false,
      };

    // return tempState3;
    default:
      return state;
  }
};

export default cartReducer;
