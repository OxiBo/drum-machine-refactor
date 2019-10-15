import { createStore, combineReducers } from "redux";
import { reducer } from "./reducers";

export default () => {
  const store = createStore(reducer,  // redux dev tool extention -https://github.com/zalmoxisus/redux-devtools-extension#usage
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store;
};
