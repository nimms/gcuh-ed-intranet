import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  documents: [],
  remoteDocuments: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ActionTypes.ADD_DOCUMENTS) {
    return Object.assign({}, state, {
      documents: state.documents.concat(action.payload)
    });
  }

  if (action.type === ActionTypes.DOCUMENTS_LOADED) {
    return Object.assign({}, state, {
      remoteDocuments: state.remoteDocuments.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
