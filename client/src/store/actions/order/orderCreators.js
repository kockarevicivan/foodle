import { ADD_ITEM, SET_QUANTITY, REMOVE_ITEM } from "./orderTypes";

export const addItemToOrderCreator = menuItem => ({
  type: ADD_ITEM,
  menuItem
});

export const setQuantityCreator = (index, quantity) => ({
  type: SET_QUANTITY,
  index,
  quantity
});

export const removeOrderItemCreator = index => ({
  type: REMOVE_ITEM,
  index
});
