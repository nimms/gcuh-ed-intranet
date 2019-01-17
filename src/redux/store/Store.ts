import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/Reducers';

const composeEnhancers = composeWithDevTools({
  /* options like actionSanitizer, stateSanitizer */
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export default store;
