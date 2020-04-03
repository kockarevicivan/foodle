import { combineReducers } from "redux";
import { authenticationReducers } from "./authenticationReducers";
import { usersReducers } from "./usersReducers";
import { menuItemsReducers } from "./menuItemReducers";
import { orderReducers } from "./orderReducers";
import { weeklyReceiptReducers } from "./weeklyReceiptReducer";
import { menuReducers } from "./menuReducers";

const rootReducer = combineReducers({
  authenticationReducers,
  usersReducers,
  menuItemsReducers,
  orderReducers,
  weeklyReceiptReducers
  menuReducers
});

export default rootReducer;
