import { Reducer } from 'redux';
import { ISharepointState } from 'src/api/Types';
import * as ActionTypes from '../ActionTypes';

const initialState: ISharepointState = {
  documents: [],
  errors: undefined,
  filteredDocuments: [],
  loading: false,
};

const rootReducer: Reducer<ISharepointState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionTypes.DOCUMENTS_LOADED: {
      return {
        ...state,
        documents: state.documents.concat(action.payload),
      };
    }
    case ActionTypes.FILTER_DOCUMENTS_BY_NAME: {
      const docs = state.documents.filter(doc =>
        doc.Title.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        filteredDocuments: docs,
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
