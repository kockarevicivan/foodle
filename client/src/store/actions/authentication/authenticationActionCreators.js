import {
  AUTHENTICATE_USER,
  LOGOUT_USER,
  IS_AUTHENTICATED
} from "./authenticationTypes";

export const authenticateUserCreator = (user, token) => ({
  type: AUTHENTICATE_USER,
  user,
  token
});

export const logoutUserCreator = () => ({
  type: LOGOUT_USER
});

export const isAuthenticatedCreator = isAuthenticated => ({
  type: IS_AUTHENTICATED,
  isAuthenticated
});
