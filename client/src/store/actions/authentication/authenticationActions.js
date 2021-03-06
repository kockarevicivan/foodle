import axios from "../../../axios";
import jwt from "jsonwebtoken";

import {
  authenticateUserCreator,
  logoutUserCreator
} from "./authenticationActionCreators";
import { setOrderCreator } from "../order/orderCreators";
import { setWeeklyReceiptCreator } from "../weeklyReceipts/weeklyReceiptsCreators";

export const authenticateUser = credentials => async dispatch => {
  const { data } = await axios.post("/authentication/login", credentials);
  const user = await jwt.decode(data.token);
  dispatch(authenticateUserCreator(user, data.token));
};

export const isAuthenticatedAction = () => async dispatch => {
  try {
    const { data } = await axios.get("/authentication/verify");
    const token = localStorage.getItem("token");
    dispatch(authenticateUserCreator(data, token));
  } catch (error) {
    dispatch(logoutUserCreator());
  }
};

export const logoutUser = () => dispatch => {
  dispatch(logoutUserCreator());
  dispatch(setOrderCreator(null));
  dispatch(setWeeklyReceiptCreator(null));
};
