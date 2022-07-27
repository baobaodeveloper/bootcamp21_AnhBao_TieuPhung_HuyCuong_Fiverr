import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { actionLoading } from '../../components/loading/loadingSlice';
import {
  GET_SUBTYPE_JOB,
  SUCCESS,
} from '../../constants/globalVariable';
import { listWorkPageActions } from '../../pages/ListWorkPage/listWorkPageSlice';
import { headerApi } from '../../services/headerTypeJobService';

function* getJobFromSubType(action) {
  try {
    yield put(actionLoading.turnOnLoading());
    yield delay(500);
    const res = yield call(() =>
      headerApi.getAllJobFromSubType(action.payload)
    );
    if (res.status === SUCCESS) {
      const { data } = res;
      yield put(actionLoading.turnOffLoading());
      yield put(listWorkPageActions.getListWorkPage(data));
    }
  } catch (error) {
    yield put(actionLoading.turnOffLoading());
    console.log(error);
  }
}

export function* followGetJobFromSubType() {
  yield takeLatest(GET_SUBTYPE_JOB, getJobFromSubType);
}
