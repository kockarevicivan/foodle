import rootReducer from "./reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

const middleware = [thunk];
export default createStore(rootReducer, applyMiddleware(...middleware));
