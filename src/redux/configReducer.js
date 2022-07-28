import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

import createSagaMiddleware from 'redux-saga';
import listWorkPageReducer from '../pages/ListWorkPage/listWorkPageSlice';
import workDetailReducer from '../pages/WorkDetailPage/workDetailSlice';

import { rootSaga } from './rootSaga';
import userPageReducer from '../pages/UserPage/userSlice';
import headerReducer from '../templates/HomeTemplate/headerSlice';
import loadingReducer from '../components/loading/loadingSlice';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    headerReducer,
    listWorkPageReducer,
    workDetailReducer,
    userSlice,
    userPageReducer,
    loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
