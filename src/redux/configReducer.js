import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../components/check';

export const store = configureStore({
  reducer: { counterSlice },
});
