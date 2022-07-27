import { call, put, takeLatest } from 'redux-saga/effects';
import {
  CREATE_USER_JOB,
  GET_INFOR_USER,
  GET_LIST_WORK,
  SUCCESS,
  UPDATE,
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
  try {
    const res = yield call(() =>
      userInfor.updateUser(
        action.payload.id,
        action.payload.userUpdate
      )
    );
  } catch (error) {
    console.log('Failed fetch data', error);
  }
}
export function* followUpdateUser() {
  yield takeLatest(UPDATE_INFOR_USER, updateUserInfor);
}

function* createJobUser(action) {
  console.log(JSON.stringify(action.payload));
  try {
    const res = yield call(() => userInfor.createJob(action.payload));
    console.log(res.data);
    if (res.status === UPDATE) {
      yield put({ type: GET_LIST_WORK });
    }
  } catch (error) {
    console.log(error);
  }
}
export function* followCreateJob() {
  yield takeLatest(CREATE_USER_JOB, createJobUser);
}
