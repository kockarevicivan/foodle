import { GET_MENU_ITEMS } from "../actions/menuItems123/menuItemTypes";

const initialState = { menuItems: [] };

export const menuItemsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_ITEMS:
      const { menuItems } = action;
      return { menuItems };

    default:
      return state;
  }
};
