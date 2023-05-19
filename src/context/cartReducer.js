const cartReducer = (state, action) => {
  const items = state.item;
  const price = action.payload.price;
  const total = state.total;
  const itemToAdd = action.payload;
  const itemExits = items.find((item) => item.id === itemToAdd.id);

  const updatedItems = items.map((item) => {
    if (item.id === itemToAdd.id) {
      return { ...item, quantity: item.quantity + 1 };
    } else {
      return item;
    }
  });

  const decreaseItems = items.map((item) => {
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
          item: [...items, itemToAdd],
          total: total + price,
        };
      }
      return state;

    case "Increase":
      return {
        item: updatedItems,
        total: total + price,
      };

    case "Decrease":
      return {
        item: decreaseItems,
        total: total - price,
      };

    case "Remove":
      return {
        item: items.filter((item) => item.id !== itemToAdd.id),
        total: total - itemToAdd.quantity * itemToAdd.price,
      };

    case "Checkout":
      return {
        item: [],
        total: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
