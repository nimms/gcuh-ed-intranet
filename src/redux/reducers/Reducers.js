import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  filteredDocuments: [],
  remoteDocuments: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ActionTypes.DOCUMENTS_LOADED) {
    return {
      ...state,
      remoteDocuments: state.remoteDocuments.concat(action.payload)
    };
  }
  if (action.type === ActionTypes.FILTER_DOCUMENTS_BY_NAME) {
    let docs = state.remoteDocuments.filter(doc =>
      doc.Title.toLowerCase().includes(action.payload.toLowerCase())
    );
    return {
      ...state,
      filteredDocuments: docs
    };
  }
  return state;
}

export default rootReducer;
