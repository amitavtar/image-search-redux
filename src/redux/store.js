
import { createStore, combineReducers } from 'redux';
import searchReducer from './searchReducer';


const rootReducer = combineReducers({
  searchHistory: searchReducer,
});

const store = createStore(rootReducer);

export default store;
