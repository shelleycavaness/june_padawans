// configure the store here

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./root";

const loggerMiddleware = createLogger();

export default preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
      )
  );
};