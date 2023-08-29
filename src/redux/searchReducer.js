// searchHistoryReducer.js
import { ADD_SEARCH_TERM } from './searchActions';

const initialState = [];

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_TERM:
      return [action.payload, ...state.slice(0, 3)];
    default:
      return state;
  }
};

export default searchReducer;
