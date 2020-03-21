import axios from "axios";
import {
  authenticateUserCreator,
  logoutUserCreator
} from "./authenticationCreators";

export const authenticateUser = credentials => async dispatch => {
  const { data } = await axios.post("http://localhost:4200/login", credentials);
  dispatch(authenticateUserCreator(data));
};

export const logoutUser = () => dispatch => {
  dispatch(logoutUserCreator());
};
