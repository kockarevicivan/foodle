import {
  addItemToOrderCreator,
  setQuantityCreator,
  removeOrderItemCreator
} from "./orderCreators";

export const addItemToOrder = menuItem => dispatch => {
  dispatch(addItemToOrderCreator(menuItem));
};

export const setQuantity = (index, quantity) => dispatch => {
  dispatch(setQuantityCreator(index, quantity));
};

export const removeOrderItem = index => dispatch => {
  dispatch(removeOrderItemCreator(index));
};
