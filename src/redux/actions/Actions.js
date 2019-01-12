import * as ActionType from '../constants/ActionTypes';
import SPClient from '../../SharepointClient';

export function getDocuments() {
  return function(dispatch) {
    // load sharepoint documents
    return new SPClient().getDocuments().then(data => {
      dispatch({ type: ActionType.DOCUMENTS_LOADED, payload: data });
    });
  };
}

export function filterDocumentsByName(name) {
  return function(dispatch) {
    dispatch({ type: ActionType.FILTER_DOCUMENTS_BY_NAME, payload: name });
  };
}
