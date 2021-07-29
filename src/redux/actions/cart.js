import actionTypes from "./actionTypes";

export const addPizzaToCart = (pizzaObj) => ({
  type: actionTypes.ADD_PIZZA_TO_CART,
  payload: pizzaObj
});
