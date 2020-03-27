import { REGISTER_USER } from "./usersTypes";
import { UPDATE_PROFILE } from "./usersTypes";

export const registerUserCreator = user => ({
  type: REGISTER_USER,
  user
});

export const updateUserCreator = updatedUser => ({
  type: UPDATE_PROFILE,
  updatedUser
});
