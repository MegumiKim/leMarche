export default function cartReducer(state, action) {
  let items = state.item || [];
  let price = action.payload.price;
  let total = state.total;
  let totalItems = state.totalItems || 0;
  let itemToAdd = action.payload;

  const itemExists = items.find((item) => item.id === itemToAdd.id);

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
      if (!itemExists) {
        return {
          item: [...items, itemToAdd],
          total: total + price,
          totalItems: totalItems + itemToAdd.quantity,
        };
      }
      return state;

    case "Increase":
      return {
        item: updatedItems,
        total: total + price,
        totalItems: totalItems + 1,
      };

    case "Decrease":
      return {
        item: decreaseItems,
        total: total - price,
        totalItems: totalItems - 1,
      };

    case "Remove":
      return {
        item: items.filter((item) => item.id !== itemToAdd.id),
        total: total - itemToAdd.quantity * itemToAdd.price,
        totalItems: totalItems - itemToAdd.quantity,
      };

    case "Checkout":
      return {
        item: [],
        total: 0,
        totalItems: 0,
      };

    default:
      return state;
  }
}
