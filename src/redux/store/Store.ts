import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';

import getDocuments from '../actions/Actions';
import rootReducer from '../reducers/Reducers';

const composeEnhancers = composeWithDevTools({
  /* options like actionSanitizer, stateSanitizer */
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(getDocuments);

export default store;
