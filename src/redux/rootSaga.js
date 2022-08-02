import { all, call } from 'redux-saga/effects';
import { followSearchJob } from '../pages/HomePage/homeSaga';
import { followGetListWork } from '../pages/ListWorkPage/listWorkSaga';
import {
  followCreateJob,
  followGetInforUser,
  followUpdateUser,
} from '../pages/UserPage/userSaga';
import { followGetJobFromSubType } from '../templates/HomeTemplate/headerSaga';

export function* rootSaga() {
  yield all([
    call(followGetInforUser),
    call(followUpdateUser),
    call(followCreateJob),
    call(followGetListWork),
    call(followGetJobFromSubType),
    call(followSearchJob),
  ]);
}
