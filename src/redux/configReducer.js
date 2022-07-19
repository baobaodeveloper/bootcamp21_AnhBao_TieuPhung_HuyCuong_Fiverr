import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

import createSagaMiddleware from 'redux-saga';
import listWorkPageReducer from '../pages/ListWorkPage/listWorkPageSlice';
import workDetailReducer from '../pages/WorkDetailPage/workDetailSlice';

import headerReducer from '../templates/HomeTemplate/Layout/Header/headerSlice';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    headerReducer,
    listWorkPageReducer,
    workDetailReducer,
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
