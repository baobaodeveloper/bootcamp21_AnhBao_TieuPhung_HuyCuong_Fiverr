import { createSlice } from '@reduxjs/toolkit';

export const workDetailSlice = createSlice({
  name: 'workDetail',
  initialState: { workDetail: {}, comment: [] },
  reducers: {
    getDetailWorks: (state, action) => {
      state.workDetail = action.payload;
    },
    getComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});
export const workDetailActions = workDetailSlice.actions;

const workDetailReducer = workDetailSlice.reducer;
export default workDetailReducer;
