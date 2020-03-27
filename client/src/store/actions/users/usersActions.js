import axios from "axios";
import { registerUserCreator, updateUserCreator } from "./usersActionCreator";

export const updateUser = (userPayload, userId) => async dispatch => {
  const token = localStorage.getItem("token");
  const { data } = await axios.put(
    `http://localhost:4200/users/${userId}`,
    userPayload,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  dispatch(updateUserCreator(data));
};

export const registerUser = credentials => async dispatch => {
  const { data } = await axios.post("http://localhost:4200/users", credentials);
  dispatch(registerUserCreator(data));
};
