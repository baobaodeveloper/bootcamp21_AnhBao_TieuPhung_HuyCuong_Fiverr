import { all, call } from 'redux-saga/effects';
import { followSearchJob } from '../pages/HomePage/homeSaga';
import { followGetListWork } from '../pages/ListWorkPage/listWorkSaga';
import {
  followCreateJob,
  followDeleteJob,
  followGetInforUser,
  followUpdateJob,
  followUpdateUser,
} from '../pages/UserPage/userSaga';
import { followGetDetailWork } from '../pages/WorkDetailPage/workDetailSaga';
import { followGetJobFromSubType } from '../templates/HomeTemplate/headerSaga';

export function* rootSaga() {
  yield all([
    call(followGetInforUser),
    call(followUpdateUser),
    call(followCreateJob),
    call(followGetListWork),
    call(followGetJobFromSubType),
    call(followSearchJob),
    call(followDeleteJob),
    call(followGetDetailWork),
    call(followUpdateJob),
  ]);
}
