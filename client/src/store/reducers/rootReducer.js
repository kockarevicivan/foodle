import { combineReducers } from "redux";
import { authenticationReducers } from "./authenticationReducers";
import { usersReducers } from "./usersReducers";

const rootReducer = combineReducers({
  authenticationReducers,
  usersReducers
});
export default rootReducer;
