import { AUTH_USER, LOGOUT } from "./actionTypes";

export const authUser = payload => ({
    type: AUTH_USER,
    payload
})

export const logout = payload => ({
    type: LOGOUT,
    payload
})