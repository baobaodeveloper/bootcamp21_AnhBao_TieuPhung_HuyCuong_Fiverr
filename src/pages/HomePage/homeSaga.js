import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { actionLoading } from '../../components/loading/loadingSlice';
import { SEARCH_JOB, SUCCESS } from '../../constants/globalVariable';
import { headerApi } from '../../services/headerTypeJobService';
import { listWorkPageActions } from '../ListWorkPage/listWorkPageSlice';

function* searchJob(action) {
  try {
    yield put(actionLoading.turnOnLoading());
    yield delay(500);
    const res = yield call(() => headerApi.searchJob(action.payload));
    if (res.status === SUCCESS) {
      const { data } = res;
      yield put(listWorkPageActions.getListWorkPage(data));
      yield put(actionLoading.turnOffLoading());
    }
  } catch (error) {
    console.log(error);
    yield put(actionLoading.turnOffLoading());
  }
}

export function* followSearchJob() {
  yield takeLatest(SEARCH_JOB, searchJob);
}
