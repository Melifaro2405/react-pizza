import actionTypes from "../actions/actionTypes";

const initialState = {
  category: 0,
  sortBy: {
    type: 'popular',
    order: 'desc'
  }
};

const filters = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: payload
      };
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        category: payload
      };
    default:
      return state;
  }
};

export default filters;