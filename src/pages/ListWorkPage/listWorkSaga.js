import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_LIST_WORK,
  SUCCESS,
} from '../../constants/globalVariable';
import { listWorkApi } from '../../services/listWorkService';
import { listWorkPageActions } from './listWorkPageSlice';

function* getListWork() {
  try {
    const res = yield call(() => listWorkApi.getListWork());
    const { data } = res;
    if (res.status === SUCCESS) {
      yield put(listWorkPageActions.getListWorkPage(data));
    }
  } catch (error) {
    console.log('Fail fetch data', error);
  }
}
export function* followGetListWork() {
  yield takeLatest(GET_LIST_WORK, getListWork);
}
