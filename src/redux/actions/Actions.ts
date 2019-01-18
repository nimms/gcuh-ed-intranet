import { call, put, takeEvery } from 'redux-saga/effects';
import { action } from 'typesafe-actions';

import * as ActionType from '../ActionTypes';
import SPClient from './../../api/SharepointClient';

export const filterDocumentsByName = (name: string) =>
  action(ActionType.FILTER_DOCUMENTS_BY_NAME, name);

function* loadDocuments() {
  try {
    const documents = yield call(new SPClient().getDocuments);
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
