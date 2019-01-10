import * as ActionType from '../constants/ActionTypes';
import SPClient from '../../SharepointClient';

export function addDocument(payload) {
  return { type: ActionType.ADD_DOCUMENT, payload };
}

export function addDocuments(payload) {
  return { type: ActionType.ADD_DOCUMENTS, payload };
}

export function getDocuments() {
  return function(dispatch) {
    return new SPClient().getDocuments().then(data => {
      dispatch({ type: ActionType.DOCUMENTS_LOADED, payload: data });
    });
  };
}

export function filterDocuments(payload) {}
