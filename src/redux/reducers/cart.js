import actionTypes from "../actions/actionTypes";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
};

const cart = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.ADD_PIZZA_TO_CART:
      const newItems = {
        ...state.items,
        [payload.id]: !state.items[payload.id]
          ? [payload]
          : [...state.items[payload.id], payload]
      };
      const allPizzas = Object.values(newItems).flat();
      const totalPrice = allPizzas.reduce((total, item) => total + item.price, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice
      };
    default:
      return state;
  }
};

export default cart;