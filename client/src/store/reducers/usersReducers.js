import { GET_USERS } from "../actions/users/usersTypes";

const initialState = { users: [] };

export const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      const { users } = action;
      return { users };
    default:
      return state;
  }
};
