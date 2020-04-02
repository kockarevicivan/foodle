import { combineReducers } from "redux";
import { authenticationReducers } from "./authenticationReducers";
import { usersReducers } from "./usersReducers";
import { menuReducers } from "./menuReducers";

const rootReducer = combineReducers({
  authenticationReducers,
  usersReducers,
  menuReducers
});
export default rootReducer;
