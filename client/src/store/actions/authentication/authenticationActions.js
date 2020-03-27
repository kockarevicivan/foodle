import axios from "axios";
import jwt from "jsonwebtoken";

import {
  authenticateUserCreator,
  logoutUserCreator
} from "./authenticationActionCreators";

const authenticationUrl = "http://localhost:4200/authentication/";

export const authenticateUser = credentials => async dispatch => {
  const { data } = await axios.post(`${authenticationUrl}login`, credentials);
  const user = await jwt.decode(data.token);
  dispatch(authenticateUserCreator(user, data.token));
};

export const isAuthenticatedAction = () => async dispatch => {
  try {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    const { data } = await axios.get(`${authenticationUrl}verify`, {
      headers
    });
    dispatch(authenticateUserCreator(data, token));
  } catch (error) {
    dispatch(logoutUserCreator());
  }
};

export const logoutUser = () => dispatch => {
  dispatch(logoutUserCreator());
};
