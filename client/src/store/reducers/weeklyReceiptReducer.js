import { SET_WEEKLY_RECEIPT } from "../actions/weeklyReceipts/weeklyReceiptTypes";

const initialState = { weeklyReceipt: null };

export const weeklyReceiptReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEEKLY_RECEIPT:
      return { weeklyReceipt: action.weeklyReceipt };

    default:
      return state;
  }
};
