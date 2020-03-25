import axios from "axios";
import { updateUserCreator } from "./profileCreators";

export const updateUser = (credentials, userId, token) => async dispatch => {
    const { data } = await axios.put(`http://localhost:4200/users/${userId}`, credentials, { headers: {Authorization: `Bearer ${token}`}});
    dispatch(updateUserCreator(data));
};