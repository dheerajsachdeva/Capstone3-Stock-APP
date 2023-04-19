import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const stocksListUrl = 'https://financialmodelingprep.com/api/v3/search-name?query=meta&limit=12&exchange=NASDAQ&apikey=9eb223102d06629a659db2e7283983fd';
const initialState = {
  stocksList: [],
  isLoading: false,
  isError: false,
};

export const fetchStocksList = createAsyncThunk('stocksList/fetchStocksList', async () => {
  try {
    const response = await fetch(stocksListUrl);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
});

export const stocksListSlice = createSlice({
  name: 'stocksList',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocksList.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchStocksList.fulfilled, (state, action) => {
        const newStocks = [];
        action.payload.map((element) => (
          newStocks.push({
            symbol: element.symbol,
            name: element.name,
          })
        ));
        return ({
          ...state,
          isLoading: false,
          stocksList: newStocks,
        });
      })
      .addCase(fetchStocksList.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
  },
});

export default stocksListSlice.reducer;
