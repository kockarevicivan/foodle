import { AUTH_USER, LOGOUT } from "./actionTypes";

const INITIAL_STATE = {
    isAuth: false,
    currentUser: null,
}

// action izgleda ovako {type: "AUTH_USER", payload>: any}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AUTH_USER: 
            return {
                ...state,
                isAuth: true,
                currentUser: action.payload
            } 
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                currentUser: null
            }
        default:
            return state;
    }
}