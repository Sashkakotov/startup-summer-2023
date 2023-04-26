import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  isLoading: false,
  error: ''
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    cardsFetching(state) {
      state.isLoading = true;
    },
    cardsFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload;
    },
    cardsFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default cardSlice.reducer;
