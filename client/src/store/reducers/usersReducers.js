import { GET_USERS, UPDATE_USER } from "../actions/users/usersTypes";

const initialState = { users: [] };

export const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      const { users } = action;
      return { users };

    case UPDATE_USER:
      const { updatedUser, index } = action;
      let newState = [...state.users];
      newState[index] = updatedUser;
      return { users: newState };

    default:
      return state;
  }
};
