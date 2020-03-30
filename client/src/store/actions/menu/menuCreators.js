import { GET_ITEMS_FOR_DAY,CREATE_ITEM, EDIT_ITEM, REMOVE_ITEM } from "./menuTypes";


export const getAllForDayCreator = items => ({
  type: GET_ITEMS_FOR_DAY,
  items
});
export const createItemCreator = item => ({
  type: CREATE_ITEM,
  item
});
export const editItemCreator = item => ({
  type: EDIT_ITEM,
  item
});
export const removeItemCreator = itemId => ({
  type: REMOVE_ITEM,
  itemId
});
