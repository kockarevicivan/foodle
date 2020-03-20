import {
  AUTHENTICATE_USER,
  LOGOUT_USER
} from "../actions/authentication/authenticationTypes";
const initialState = { user: null, isLogged: false };

export const authenticationReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      console.log(action.user);
      return {
        user: action.user,
        isLogged: true
      };
    case LOGOUT_USER:
      return {
        user: null,
        isLogged: false
      };
    default:
      return state;
  }
};
