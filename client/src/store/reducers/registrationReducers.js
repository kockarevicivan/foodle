import { REGISTER_USER } from "../actions/registration/registrationTypes";
const initialState = { user: null };

export const registrationReducers = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER:
        return {
          user: action.user,
        };
      default:
        return state;
    }
  };
  