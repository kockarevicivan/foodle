import { SET_WEEKLY_RECEIPT } from "./weeklyReceiptTypes";

export const setWeeklyReceiptCreator = weeklyReceipt => ({
  type: SET_WEEKLY_RECEIPT,
  weeklyReceipt
});
