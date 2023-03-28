import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    saveCode(state, action: PayloadAction<string>) {
      return (state = action.payload);
    },
  },
});

export const codeSliceReducer = codeSlice.reducer;
export const codeSliceAction = codeSlice.actions;
