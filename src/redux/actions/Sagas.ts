import { call, put } from 'redux-saga/effects';

import * as ActionType from '../ActionTypes';
import SPClient from './../../api/SharepointClient';

export function* getDocuments() {
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
