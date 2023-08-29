// store.js inside the redux folder
import { createStore, combineReducers } from 'redux';
import searchReducer from './searchReducer';
// import { searchReducer } from './searchHistory';


const rootReducer = combineReducers({
  searchHistory: searchReducer,
});

const store = createStore(rootReducer);

export default store;
