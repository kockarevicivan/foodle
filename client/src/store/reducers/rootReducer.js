import { combineReducers } from "redux";
import { authenticationReducers } from "./authenticationReducers";
import { registrationReducers } from "./registrationReducers";

const rootReducer = combineReducers({ authenticationReducers, registrationReducers });
export default rootReducer;
