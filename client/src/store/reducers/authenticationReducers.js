import {
  AUTHENTICATE_USER,
  LOGOUT_USER,
  IS_AUTHENTICATED
} from "../actions/authentication/authenticationTypes";
import { UPDATE_PROFILE } from "../actions/users/usersTypes";
import axios from "../../axios";

const initialState = { user: null, isAuthenticated: false };

export const authenticationReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      localStorage.setItem("token", action.token);
      axios.defaults.headers["authorization"] = action.token;
      return {
        user: action.user,
        isAuthenticated: true
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      axios.defaults.headers["authorization"] = "";
      return {
        user: null,
        isAuthenticated: false
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        user: action.updatedUser
      };
    default:
      return state;
  }
};
