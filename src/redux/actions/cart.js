import actionTypes from "./actionTypes";

export const addPizzaToCart = (pizzaObj) => ({
  type: actionTypes.ADD_PIZZA_TO_CART,
  payload: pizzaObj
});

export const removeCartItem = (id) => ({
  type: actionTypes.REMOVE_CART_ITEM,
  payload: id
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART
});

export const plusCartItem = (id) => ({
  type: actionTypes.PLUS_CART_ITEM,
  payload: id
});

export const minusCartItem = (id) => ({
  type: actionTypes.MINUS_CART_ITEM,
  payload: id
});
