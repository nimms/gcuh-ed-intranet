import { call, put, takeEvery } from 'redux-saga/effects';

import * as ActionType from '../ActionTypes';
import SPClient from './../../api/SharepointClient';

function* loadDocuments() {
  try {
    const documents = yield call(new SPClient().getDocuments);
    console.log(documents);
    yield put({ type: ActionType.DOCUMENTS_LOADED, payload: documents });
  } catch (e) {
    yield put({
      message: e.message,
      type: ActionType.SHAREPOINT_CONNECT_ERROR,
    });
  }
}

export default function* getDocuments() {
  yield takeEvery(ActionType.START_LOAD_DOCUMENTS, loadDocuments);
}
