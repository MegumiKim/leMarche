const cartReducer = (state, action) => {
  let price = action.payload.price;
  let total = state["total"];
  let currentItems = [...state["item"]];
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
        };
      }
      return state;

    case "Increase":
      return {
        item: updatedItems,
        total: total + price,
      };
    // return tempState1;
    case "Decrease":
      return {
        item: decreaseItems,
        total: total - price,
      };
    // return tempState2;
    case "Remove":
      return {
        item: state["item"].filter((item) => item.id !== itemToAdd.id),
        total: total - itemToAdd.quantity * itemToAdd.price,
      };
    // return tempState3;
    default:
      return state;
  }
};

export default cartReducer;
