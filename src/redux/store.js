import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import { saveToSessionStorage, loadFromSessionStorage,sessionStorageMiddleware } from "../Utils/SessionStorage.js";

const persistedState = loadFromSessionStorage();
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, sessionStorageMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(rootReducer, persistedState, middleware);
// store.subscribe(() =>
//   saveToSessionStorage(store.getState())
// )

export default store;
export * from "./user";