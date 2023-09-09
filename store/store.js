import { createStore, combineReducers } from 'redux';
import filtersReducer from './slices/filtersReducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
});

const store = createStore(rootReducer);

export default store;
