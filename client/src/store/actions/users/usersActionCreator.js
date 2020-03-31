import { REGISTER_USER, UPDATE_PROFILE, GET_USERS } from "./usersTypes";

export const registerUserCreator = user => ({
  type: REGISTER_USER,
  user
});

export const updateUserCreator = updatedUser => ({
  type: UPDATE_PROFILE,
  updatedUser
});

export const getUsersCreator = users => ({
  type: GET_USERS,
  users
});
