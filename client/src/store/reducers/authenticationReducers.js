import {
  AUTHENTICATE_USER,
  LOGOUT_USER,
  IS_AUTHENTICATED
} from "../actions/authentication/authenticationTypes";
const initialState = { user: null, isAuthenticated: false };

export const authenticationReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      localStorage.setItem("token", action.token);
      return {
        user: action.user,
        isAuthenticated: true
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        user: null,
        isAuthenticated: false
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    default:
      return state;
  }
};