import { legacy_createStore as createStore, combineReducers } from "redux";
import{ composeWithDevTools } from "@redux-devtools/extension";

import productsReducer from "./reducer";

let reducers = combineReducers({
  store: productsReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools() );
};

export default store();