import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  // add components here
});

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
);