import { createSlice } from "@reduxjs/toolkit";
import { localStorageService } from "../services/localStorageService";

// cho truong 
const initialState = {
  user: localStorageService.getUserLocal(),
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.user = action.payload
    }
  },
})

export const { setUserInfor } = userSlice.actions;
export default userSlice.reducer;



