import {
  SET_WEEKLY_RECEIPT,
  GET_WEEKLY_RECEIPTS_FOR_DATE,
  GET_WEEKLY_RECEIPT_AND_ORDERS,
} from "../actions/weeklyReceipts/weeklyReceiptTypes";

const initialState = {
  weeklyReceipt: null,
  weeklySummaryReceipts: null,
  names: null,
  userReceipt: null,
  orders: null,
};

export const weeklyReceiptReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEEKLY_RECEIPT:
      return { weeklyReceipt: action.weeklyReceipt };
    case GET_WEEKLY_RECEIPTS_FOR_DATE:
      return {
        weeklySummaryReceipts: action.weeklyReceipts.weeklyReceipts,
        names: action.weeklyReceipts.nameList,
      };
    case GET_WEEKLY_RECEIPT_AND_ORDERS:
      return {
        userReceipt: action.weeklyReceiptAndOrders.weeklyReceipt[0],
        orders: action.weeklyReceiptAndOrders.orders,
      };

    default:
      return state;
  }
};
