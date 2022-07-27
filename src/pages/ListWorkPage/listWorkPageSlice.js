import { createSlice } from '@reduxjs/toolkit';

export const listWorkPageSlice = createSlice({
  name: 'listWorkPage',
  initialState: {
    listWork: [],
  },
  reducers: {
    getListWorkPage: (state, action) => {
      state.listWork = action.payload;
    },
  },
});
export const listWorkPageActions = listWorkPageSlice.actions;
const listWorkPageReducer = listWorkPageSlice.reducer;
export default listWorkPageReducer;
