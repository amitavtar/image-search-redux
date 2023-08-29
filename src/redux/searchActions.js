export const ADD_SEARCH_TERM = 'ADD_SEARCH_TERM';

export const addSearchTerm = (term) => ({
  type: ADD_SEARCH_TERM,
  payload: term,
});