import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_LIST_WORK,
  SUCCESS,
} from '../../constants/globalVariable';
import { listWorkApi } from '../../services/listWork';
import { listWorkPageActions } from './listWorkPageSlice';

function* getListWork() {
  try {
    const res = yield call(() => listWorkApi.getListWork());
    const { data } = res;
    if (res.status === SUCCESS) {
      const chunkSize = 12;
      let chunk = [];
      for (let i = 0; i < data.length; i += chunkSize) {
        chunk.push(data.slice(i, i + chunkSize));
      }
      yield put(listWorkPageActions.getListWorkPage(chunk));
    }
  } catch (error) {
    console.log('Fail fetch data', error);
  }
}
export function* followGetListWork() {
  yield takeLatest(GET_LIST_WORK, getListWork);
}
