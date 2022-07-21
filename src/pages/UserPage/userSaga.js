import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_INFOR_USER,
  SUCCESS,
  UPDATE_INFOR_USER,
} from '../../constants/globalVariable';
import { userInfor } from '../../services/userSevice';
import { userPageAction } from './userSlice';

function* getInforUser(action) {
  try {
    const res = yield call(() =>
      userInfor.getInforUser(action.payload)
    );
    if (res.status === SUCCESS) {
      const { data } = res;
      yield put(userPageAction.getAllInforUser(data));
    }
  } catch (error) {
    console.log('Failed fetch data user', error);
  }
}

export function* followGetInforUser() {
  yield takeLatest(GET_INFOR_USER, getInforUser);
}

function* updateUserInfor(action) {
  console.log(action.payload);
  try {
    const res = yield call(() =>
      userInfor.updateUser(
        action.payload.id,
        action.payload.userUpdate
      )
    );
    console.log(res);
  } catch (error) {
    console.log('Failed fetch data', error);
  }
}
export function* followUpdateUser() {
  yield takeLatest(UPDATE_INFOR_USER, updateUserInfor);
}
