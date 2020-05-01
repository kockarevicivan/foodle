import {
  SET_WEEKLY_RECEIPT,
  GET_WEEKLY_RECEIPTS_FOR_DATE,
  GET_WEEKLY_RECEIPT_AND_ORDERS,
} from "./weeklyReceiptTypes";

export const setWeeklyReceiptCreator = (weeklyReceipt) => ({
  type: SET_WEEKLY_RECEIPT,
  weeklyReceipt,
});

export const getWeeklyReceipts = (weeklyReceipts) => ({
  type: GET_WEEKLY_RECEIPTS_FOR_DATE,
  weeklyReceipts,
});
export const getWeeklyReceiptAndOrders = (weeklyReceiptAndOrders) => ({
  type: GET_WEEKLY_RECEIPT_AND_ORDERS,
  weeklyReceiptAndOrders,
});
