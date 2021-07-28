import actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: true
};

const pizzas = (state = initialState, {type, payload}) => {
  switch (type) {

    case actionTypes.SET_PIZZAS:
      return {
        ...state,
        items: payload,
        loading: false
      };

    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload
      };

    default:
      return state;
  }
};

export default pizzas;
