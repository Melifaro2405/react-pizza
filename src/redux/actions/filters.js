import actionTypes from "./actionTypes";

export const setSortBy = (name) => ({
  type: actionTypes.SET_SORT_BY,
  payload: name
});

export const setCategory = (catIndex) => ({
  type: actionTypes.SET_CATEGORY,
  payload: catIndex
});
