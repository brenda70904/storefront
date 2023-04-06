import { legacy_createStore as createStore, combineReducers } from "redux";
import{ composeWithDevTools } from "@redux-devtools/extension";

import productsReducer from "./products";
import categoryReducer from "./categories";
import cartReducer from "./cart";

let reducers = combineReducers({
  cart: cartReducer,
  categories: categoryReducer, 
  products: productsReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools() );
};

export default store();