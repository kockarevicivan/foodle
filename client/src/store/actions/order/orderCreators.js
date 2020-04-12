import {
  ADD_ITEM,
  SET_QUANTITY,
  REMOVE_ORDER_ITEM,
  COMPLETE_ORDER,
  SET_ORDER,
  SET_ALL_ORDERS,
  UPDATE_ORDER,
} from "./orderTypes";

export const addItemToOrderCreator = (menuItem) => ({
  type: ADD_ITEM,
  menuItem,
});

export const setQuantityCreator = (index, quantity) => ({
  type: SET_QUANTITY,
  index,
  quantity,
});

export const removeOrderItemCreator = (index) => ({
  type: REMOVE_ORDER_ITEM,
  index,
});

export const setOrderCreator = (order) => ({
  type: SET_ORDER,
  order,
});

export const completeOrderCreator = () => ({
  type: COMPLETE_ORDER,
});

export const setAllOrdersCreator = (orders) => ({
  type: SET_ALL_ORDERS,
  orders,
});

export const setTotalCreator = (order) => ({
  type: UPDATE_ORDER,
  order,
});
