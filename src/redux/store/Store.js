import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/Reducers';

const composeEnhancers = composeWithDevTools({
  /* options like actionSanitizer, stateSanitizer */
});

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;
