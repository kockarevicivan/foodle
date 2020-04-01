import { combineReducers } from "redux";
import { authenticationReducers } from "./authenticationReducers";
import { usersReducers } from "./usersReducers";
import { menuItemsReducers } from "./menuItemReducers";
import { orderReducers } from "./orderReducers";

const rootReducer = combineReducers({
  authenticationReducers,
  usersReducers,
  menuItemsReducers,
  orderReducers
});

export default rootReducer;
