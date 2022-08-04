import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_DETAIL_JOB,
  SUCCESS,
} from '../../constants/globalVariable';
import { listWorkApi } from '../../services/listWorkService';
import { userPageAction } from '../UserPage/userSlice';
import { workDetailActions } from './workDetailSlice';

function* getDetailJob(action) {
  try {
    const res = yield call(() =>
      listWorkApi.getWorkDetail(action.payload)
    );
    if (res.status === SUCCESS) {
      const { data } = res;
      yield put(workDetailActions.getDetailWorks(data));
      yield put(userPageAction.editJob(data));
    }
  } catch (error) {}
}

export function* followGetDetailWork() {
  yield takeLatest(GET_DETAIL_JOB, getDetailJob);
}
