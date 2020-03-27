import { UPDATE_USER } from "../actions/profile/profileTypes";
const initialState = { user: null };

export const userReducers = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_USER:
        return {
          user: action.credentials,
        };
      default:
        return state;
    }
  };
  