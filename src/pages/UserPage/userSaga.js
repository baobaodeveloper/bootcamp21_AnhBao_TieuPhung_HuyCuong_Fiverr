import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { actionLoading } from '../../components/loading/loadingSlice';
import {
  CREATE_USER_JOB,
  DELETE_JOB,
  GET_INFOR_USER,
  GET_LIST_WORK,
  SUCCESS,
  UPDATE,
  UPDATE_INFOR_USER,
  UPDATE_JOB,
} from '../../constants/globalVariable';
import { listWorkApi } from '../../services/listWorkService';
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
    yield call(() =>
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
  try {
    const res = yield call(() => userInfor.createJob(action.payload));

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

function* deleteJob(action) {
  try {
    yield put(actionLoading.turnOnLoading());
    yield delay(500);
    const res = yield call(() => userInfor.deleteJob(action.payload));
    console.log(res);
    if (res.status === SUCCESS) {
      yield put(() => listWorkApi.getListWork());
      yield put({ type: GET_LIST_WORK });
      yield put(actionLoading.turnOffLoading());
    }
  } catch (error) {
    console.log(error);
    yield put(actionLoading.turnOffLoading());
  }
}
export function* followDeleteJob() {
  yield takeLatest(DELETE_JOB, deleteJob);
}
function* updateJobDetail(action) {
  try {
    yield put(actionLoading.turnOnLoading());
    yield delay(500);
    const res = yield call(() =>
      userInfor.updateJob(action.payload.data, action.payload.id)
    );
    if (res.status === SUCCESS) {
      yield put(() => listWorkApi.getListWork());
      yield put({ type: GET_LIST_WORK });
      yield put(actionLoading.turnOffLoading());
    }
  } catch (error) {
    console.log(error);
    yield put(actionLoading.turnOffLoading());
  }
}
export function* followUpdateJob() {
  yield takeLatest(UPDATE_JOB, updateJobDetail);
}
