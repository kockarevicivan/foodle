import rootReducer from "./reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
