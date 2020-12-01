import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { saveState } from "./localStorage";
import rootReducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState().users.items);
});

export default store;
