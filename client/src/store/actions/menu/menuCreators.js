import {
  SET_MENU,
  ADD_MENU_ITEM,
  ADD_MANY_MENU_ITEMS,
  EDIT_ITEM,
  REMOVE_MENU_ITEM,
} from "./menuTypes";

export const setMenuCreator = (menu) => ({
  type: SET_MENU,
  menu,
});
export const addMenuItemCreator = (item) => ({
  type: ADD_MENU_ITEM,
  item,
});
export const addManyMenuItemsCreator = (item) => ({
  type: ADD_MANY_MENU_ITEMS,
  item,
});
export const editItemCreator = (item) => ({
  type: EDIT_ITEM,
  item,
});
export const removeItemCreator = (itemIndex) => ({
  type: REMOVE_MENU_ITEM,
  itemIndex,
});
