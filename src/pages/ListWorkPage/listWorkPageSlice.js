import { createSlice } from '@reduxjs/toolkit';

export const listWorkPageSlice = createSlice({
  name: 'listWorkPage',
  initialState: {
    listWork: [],
  },
  reducers: {
    getListWorkPage: (state, action) => {
      const chunkSize = 12;
      let chunk = [];
      for (let i = 0; i < action.payload.length; i += chunkSize) {
        chunk.push(action.payload.slice(i, i + chunkSize));
        // do whatever
      }
      state.listWork = chunk;
    },
  },
});
export const listWorkPageActions = listWorkPageSlice.actions;
const listWorkPageReducer = listWorkPageSlice.reducer;
export default listWorkPageReducer;
