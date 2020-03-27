import { combineReducers } from "redux";
import { authenticationReducers } from "./authenticationReducers";
import { registrationReducers } from "./registrationReducers";
import { userReducers } from "./userReducers"

const rootReducer = combineReducers({ authenticationReducers, registrationReducers,userReducers });
export default rootReducer;
