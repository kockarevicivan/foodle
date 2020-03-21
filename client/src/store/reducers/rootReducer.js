import { combineReducers } from "redux";
import { authenticationReducers } from "./authenticationReducers";

const rootReducer = combineReducers({ authenticationReducers });
export default rootReducer;
