import { GET_MENU_ITEMS } from "./menuItemTypes";

export const getMenuItemsCreator = menuItems => ({
  type: GET_MENU_ITEMS,
  menuItems
});
