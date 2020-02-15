import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";

const logger = store => next => action => {
  console.info("logger: ", action);
  return next(action);
};

const newStore = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default newStore;
