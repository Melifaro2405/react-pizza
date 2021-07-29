import actionTypes from "./actionTypes";
import axios from "axios";

export const setLoading = (bool) => ({
  type: actionTypes.SET_LOADING,
  payload: bool
});

export const fetchPizzas = ((sortBy, category) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get(`/pizzas?${category ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({data}) => dispatch(setPizzas(data)));
});

export const setPizzas = (items) => ({
  type: actionTypes.SET_PIZZAS,
  payload: items
});
