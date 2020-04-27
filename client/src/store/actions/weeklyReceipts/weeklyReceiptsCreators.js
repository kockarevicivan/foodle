import { 
  SET_WEEKLY_RECEIPT,
  GET_WEEKLY_RECEIPTS_FOR_DATE
 } from "./weeklyReceiptTypes";

export const setWeeklyReceiptCreator = weeklyReceipt => ({
  type: SET_WEEKLY_RECEIPT,
  weeklyReceipt
});

export const getWeeklyReceipts = weeklyReceipts => ({
  type: GET_WEEKLY_RECEIPTS_FOR_DATE,
  weeklyReceipts
});
