import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: ''
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    tokenFetchingSuccess(state, action) {
      state.token = action.payload;
    }
  }
});

export default tokenSlice.reducer;
