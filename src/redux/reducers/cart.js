import actionTypes from "../actions/actionTypes";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
};

const getTotalPrice = (arr) => arr.reduce((total, item) => total + item.price, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cart = (state = initialState, {type, payload}) => {
  switch (type) {

    case actionTypes.ADD_PIZZA_TO_CART: {
      const currentPizzaItems = !state.items[payload.id]
        ? [payload]
        : [...state.items[payload.id].items, payload];

      const newItems = {
        ...state.items,
        [payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        }
      };
      const allPizzas = Object.values(newItems).map((obj) => obj.items).flat();
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice
      };
    }

    case actionTypes.REMOVE_CART_ITEM: {
      const updatedItems = {...state.items};
      const currentTotalPrice = updatedItems[payload].totalPrice;
      const currentTotalCount = updatedItems[payload].items.length;
      delete updatedItems[payload]
      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount
      };
    }

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0
      };

    case actionTypes.PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.items[payload].items,
        state.items[payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case actionTypes.MINUS_CART_ITEM: {
      const oldItems = state.items[payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;