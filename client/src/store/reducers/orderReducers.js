import {
  ADD_ITEM,
  SET_QUANTITY,
  REMOVE_ITEM
} from "../actions/order/orderTypes";

const initialState = { orderItems: [] };
export const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const { menuItem } = action;
      var newState = [...state.orderItems];
      let orderItem = {
        title: menuItem.title,
        menuItem: menuItem._id,
        quantity: 0
      };
      newState.push(orderItem);
      return { orderItems: newState };

    case SET_QUANTITY:
      var { index, quantity } = action;
      var newState = [...state.orderItems];
      newState[index].quantity = quantity;
      return { orderItems: newState };

    case REMOVE_ITEM:
      var { index } = action;
      var newState = [...state.orderItems];
      newState.splice(index, 1);
      return { orderItems: newState };

    default:
      return state;
  }
};
