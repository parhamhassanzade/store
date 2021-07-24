// import rootReducer from "./Reducer/index";

import { createStore } from "redux";
import { ManageBasket } from "./Reducer/ManageBasket";

const store = createStore(
  ManageBasket,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;