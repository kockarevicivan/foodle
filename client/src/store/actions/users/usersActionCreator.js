import {
    REGISTER_USER,
    UPDATE_PROFILE,
    GET_USERS,
    UPDATE_USER,
    UPDATE_PASSWORD
} from "./usersTypes";

export const registerUserCreator = user => ({
    type: REGISTER_USER,
    user
});

export const updateProfileCreator = updatedUser => ({
    type: UPDATE_PROFILE,
    updatedUser
});

export const updateUserCreator = (updatedUser, index) => ({
    type: UPDATE_USER,
    updatedUser,
    index
});

export const getUsersCreator = users => ({
    type: GET_USERS,
    users
});
export const updatePasswordCreator = updatedPassword => ({
  type: UPDATE_PASSWORD,
  updatedPassword
});
