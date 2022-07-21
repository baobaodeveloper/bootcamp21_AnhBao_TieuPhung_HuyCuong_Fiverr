import { all, call } from 'redux-saga/effects';
import {
  followGetInforUser,
  followUpdateUser,
} from '../pages/UserPage/userSaga';

export function* rootSaga() {
  yield all([call(followGetInforUser), call(followUpdateUser)]);
}
