import { createSlice } from '@reduxjs/toolkit';

export const listWorkPageSlice = createSlice({
  name: 'listWorkPage',
  initialState: {
    listWork: [],
    lengthListWork: 0,
  },
  reducers: {
    getListWorkPage: (state, action) => {
      state.lengthListWork = action.payload?.length;
      const chunkSize = 12;
      let chunk = [];
      for (let i = 0; i < action.payload.length; i += chunkSize) {
        chunk.push(action.payload.slice(i, i + chunkSize));
      }
      state.listWork = [...chunk];

      // state.listWork = action.payload;
    },
  },
});
export const listWorkPageActions = listWorkPageSlice.actions;
const listWorkPageReducer = listWorkPageSlice.reducer;
export default listWorkPageReducer;
