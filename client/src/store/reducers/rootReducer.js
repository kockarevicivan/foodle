import { combineReducers } from "redux";
import { authenticationReducers } from "./authenticationReducers";
import { usersReducers } from "./usersReducers";
import { orderReducers } from "./orderReducers";
import { weeklyReceiptReducers } from "./weeklyReceiptReducer";
import { menuReducers } from "./menuReducers";

const rootReducer = combineReducers({
  authenticationReducers,
  usersReducers,
  orderReducers,
  weeklyReceiptReducers,
  menuReducers
});

export default rootReducer;
