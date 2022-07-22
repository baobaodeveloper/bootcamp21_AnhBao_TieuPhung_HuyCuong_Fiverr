import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    listSlide: [],
  },
  reducers: {
    getSlider: (state, action) => {
      state = action.payload;
    },
  },
});

export const homeSliceActions = homeSlice.actions;
const homeSliceReducer = homeSlice.reducer;
export default homeSliceReducer;
