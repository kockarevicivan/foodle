import axios from "../../../axios";
import { registerUserCreator, updateUserCreator } from "./usersActionCreator";

export const updateUser = (userPayload, userId) => async dispatch => {
  const { data } = await axios.put(`/users/${userId}`, userPayload);
  dispatch(updateUserCreator(data));
};

export const registerUser = userPayload => async dispatch => {
  const { data } = await axios.post("/users", userPayload);
  dispatch(registerUserCreator(data));
};
