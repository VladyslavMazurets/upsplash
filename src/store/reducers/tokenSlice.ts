import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    saveToken(state, action: PayloadAction<string>) {
      return (state = action.payload);
    },
  },
});

export const tokenSliceReducer = tokenSlice.reducer;
export const tokenSliceAction = tokenSlice.actions;
