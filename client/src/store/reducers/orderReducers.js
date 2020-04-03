import {
  ADD_ITEM,
  SET_QUANTITY,
  REMOVE_ITEM,
  SET_ORDER
} from "../actions/order/orderTypes";

const initialState = { order: null };
export const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const { menuItem } = action;
      let orderItem = {
        title: menuItem.title,
        menuItem: menuItem._id,
        quantity: 0
      };

      var order = { ...state.order };
      order.orderItems = [...state.order.orderItems, orderItem];
      return { order };

    case SET_QUANTITY:
      var { index, quantity } = action;
      var order = { ...state.order };
      order.orderItems = state.order.orderItems.map((item, i) =>
        i !== index ? item : { ...item, quantity }
      );
      order.orderItems[index].quantity = quantity;
      return { order };

    case REMOVE_ITEM:
      var { index } = action;
      var order = { ...state.order };
      order.orderItems = order.orderItems.filter((item, i) => i !== index);
      return { order };

    case SET_ORDER:
      var { order } = action;
      return { ...state, order };

    default:
      return state;
  }
};
