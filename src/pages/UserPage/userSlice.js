import { createSlice } from '@reduxjs/toolkit';

const userPageSlice = createSlice({
  name: 'userPage',
  initialState: {
    user: {},
  },
  reducers: {
    getAllInforUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const userPageAction = userPageSlice.actions;
const userPageReducer = userPageSlice.reducer;
export default userPageReducer;
