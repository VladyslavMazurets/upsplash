import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITopics } from '../../models/models';

const initialState: ITopics[] = [];

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    saveTopicsData(state, action: PayloadAction<ITopics[]>) {
      return (state = action.payload);
    },
  },
});

export const topicsSliceAction = topicsSlice.actions;
export const topicsSliceReducer = topicsSlice.reducer;
