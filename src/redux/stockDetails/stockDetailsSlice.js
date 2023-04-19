import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const key = '?apikey=9eb223102d06629a659db2e7283983fd';
const stockDetailsUrl = 'https://financialmodelingprep.com/api/v3/quote/';

const initialState = {
  stockDetails: [],
  isLoading: false,
  isError: false,
  fetched: false,
};

export const fetchStockDetails = createAsyncThunk('stockDetails/fetchStockDetails', async (symbol) => {
  try {
    const response = await axios.get(stockDetailsUrl + symbol + key);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const stockDetailsSlice = createSlice({
  name: 'stockDetails',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchStockDetails.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchStockDetails.fulfilled, (state, action) => {
        const newStocks = [];
        action.payload.map((element) => (
          newStocks.push({
            symbol: element.symbol,
            name: element.name,
            price: element.price,
            change: element.change,
            dayLow: element.dayLow,
            dayHigh: element.dayHigh,
            yearLow: element.yearLow,
            yearHigh: element.yearHigh,
            changesPercentage: element.changesPercentage,
            volume: element.volume,
          })
        ));
        return ({
          ...state,
          isLoading: false,
          stockDetails: newStocks,
          fetched: true,
        });
      })
      .addCase(fetchStockDetails.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
  },
});

export default stockDetailsSlice.reducer;
