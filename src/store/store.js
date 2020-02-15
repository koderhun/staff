import { createStore, compose, applyMiddleware } from "redux";
import throttle from "lodash.throttle";
import rootReducer from "./reducers/rootReducer";
import { loadStorage, saveStorage } from "./localStorage";

const logger = store => next => action => {
  console.info("logger: ", action);
  return next(action);
};

const persistedStorage = loadStorage();

const newStore = createStore(
  rootReducer,
  persistedStorage,
  compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

newStore.subscribe(
  throttle(() => {
    saveStorage({
      personals: newStore.getState().personals
    });
  }, 1000)
);

export default newStore;
