import { createSlice } from '@reduxjs/toolkit';

const userPageSlice = createSlice({
  name: 'userPage',
  initialState: {
    user: {},
    editMode: false,
    editJob: {
      proServices: false,
      localSellers: false,
      onlineSellers: false,
      deliveryTime: false,
      type: '',
      subType: '',
      image: '',
      name: '',
      price: 0,
      id: '',
    },
  },
  reducers: {
    getAllInforUser: (state, action) => {
      state.user = action.payload;
    },
    editJob: (state, action) => {
      state.editMode = true;
      state.editJob.proServices =
        action.payload?.proServices || false;
      state.editJob.localSellers =
        action.payload?.localSellers || false;
      state.editJob.onlineSellers =
        action.payload?.onlineSellers || false;
      state.editJob.name = action.payload?.name || '';
      state.editJob.deliveryTime =
        action.payload?.deliveryTime || false;
      state.editJob.price = action.payload?.price || 0;
      state.editJob.type = action.payload?.type?.name || '';
      state.editJob.subType = action.payload?.subType?.name || '';
      state.editJob.id = action.payload?._id || '';
    },
    editMode: (state) => {
      state.editMode = false;
      state.editJob = {
        proServices: false,
        localSellers: false,
        onlineSellers: false,
        deliveryTime: false,
        type: '',
        subType: '',
        image: '',
        name: '',
        price: 0,
        id: '',
      };
    },
  },
});

export const userPageAction = userPageSlice.actions;
const userPageReducer = userPageSlice.reducer;
export default userPageReducer;
