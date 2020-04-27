import {
  SET_WEEKLY_RECEIPT,
  GET_WEEKLY_RECEIPTS_FOR_DATE,
} from "../actions/weeklyReceipts/weeklyReceiptTypes";

const initialState = { weeklyReceipt: null , weeklySummaryReceipts: null};
  
export const weeklyReceiptReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEEKLY_RECEIPT:
      return { weeklyReceipt: action.weeklyReceipt };
    case GET_WEEKLY_RECEIPTS_FOR_DATE:
      return { weeklySummaryReceipts: action.weeklyReceipts };

    default:
      return state;
  }
};
