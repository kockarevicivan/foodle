import axios from "../../../axios";
import {
    registerUserCreator,
    updateProfileCreator,
    getUsersCreator,
    updateUserCreator,
    updatePasswordCreator
} from "./usersActionCreator";

export const updateProfile = (userPayload, userId) => async dispatch => {
    const { data } = await axios.put(`/users/${userId}`, userPayload);
    dispatch(updateProfileCreator(data));
};

export const updateUser = (userPayload, userId, index) => async dispatch => {
    const { data } = await axios.put(`/users/${userId}`, userPayload);
    dispatch(updateUserCreator(data, index));
};

export const registerUser = userPayload => async dispatch => {
    const { data } = await axios.post("/users", userPayload);
    dispatch(registerUserCreator(data));
};

export const getUsersAction = () => async dispatch => {
    const { data } = await axios.get("/users");
    dispatch(getUsersCreator(data));
};
export const updatePassword = (payload, userId) => async dispatch => {
  const { data } = await axios.put(`/users/password/${userId}`, payload);
  dispatch(updatePasswordCreator(data));
};
