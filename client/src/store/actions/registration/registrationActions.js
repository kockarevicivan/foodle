import axios from "axios";
import { registerUserCreator } from "./registrationCreators";

export const registerUser = credentials => async dispatch => {
    const { data } = await axios.post("http://localhost:4200/users", credentials);
    dispatch(registerUserCreator(data));
};