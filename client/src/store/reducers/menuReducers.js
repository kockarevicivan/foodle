import {
    AUTHENTICATE_USER,
    LOGOUT_USER,
    IS_AUTHENTICATED
  } from "../actions/authentication/authenticationTypes";
  const initialState = { user: null, isLogged: false };
  
  export const authenticationReducers = (state = initialState, action) => {
    switch (action.type) {
      case AUTHENTICATE_USER:
        localStorage.setItem("token", action.user.token);
        return {
          user: action.user,
          isLogged: true
        };
      case LOGOUT_USER:
        localStorage.removeItem("token");
        return {
          user: null,
          isLogged: false
        };
      default:
        return state;
    }
  };
  