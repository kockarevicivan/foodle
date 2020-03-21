import { AUTHENTICATE_USER, LOGOUT_USER } from "./authenticationTypes";

export const authenticateUserCreator = user => ({
  type: AUTHENTICATE_USER,
  user
});

export const logoutUserCreator = () => ({
  type: LOGOUT_USER
});
