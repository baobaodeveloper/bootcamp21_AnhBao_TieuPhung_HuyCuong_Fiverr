import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    typeJob: [],
    subTypeJob: [],
    subTypeJobImg: [],
  },
  reducers: {
    getHeaderAllTypeJob: (state, action) => {
      state.typeJob = action.payload.map((typeJob) => ({
        id: typeJob._id,
        name: typeJob.name,
        subTypeJobImg: [...state.subTypeJobImg, typeJob.subTypeJobs],
        subTypeJobs: typeJob.subTypeJobs.map((item) => ({
          key: item._id,
          label: item.name,
        })),
      }));
    },
  },
});
export const HeaderTypeJobAction = headerSlice.actions;
const headerReducer = headerSlice.reducer;
export default headerReducer;
