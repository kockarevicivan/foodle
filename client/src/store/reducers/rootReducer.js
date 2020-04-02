import { combineReducers } from "redux";
import { authenticationReducers } from "./authenticationReducers";
import { usersReducers } from "./usersReducers";
import { menuItemsReducers } from "./menuItemReducers";
import { orderReducers } from "./orderReducers";
import { weeklyReceiptReducers } from "./weeklyReceiptReducer";

const rootReducer = combineReducers({
  authenticationReducers,
  usersReducers,
  menuItemsReducers,
  orderReducers,
  weeklyReceiptReducers
});

export default rootReducer;
