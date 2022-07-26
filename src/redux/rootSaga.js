import { all, call } from 'redux-saga/effects';
import { followGetListWork } from '../pages/ListWorkPage/listWorkSaga';
import {
  followCreateJob,
  followGetInforUser,
  followUpdateUser,
} from '../pages/UserPage/userSaga';

export function* rootSaga() {
  yield all([
    call(followGetInforUser),
    call(followUpdateUser),
    call(followCreateJob),
    call(followGetListWork),
  ]);
}
