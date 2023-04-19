import { configureStore } from '@reduxjs/toolkit';
import stocksListReducer from './stocksList/stocksListSlice';
import stockDetailsReducer from './stockDetails/stockDetailsSlice';

const store = configureStore({
  reducer: {
    stocksList: stocksListReducer,
    stockDetails: stockDetailsReducer,
  },
});

export default store;
