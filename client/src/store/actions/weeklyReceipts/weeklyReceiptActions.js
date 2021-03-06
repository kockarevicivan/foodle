import axios from "../../../axios";
import {
  setWeeklyReceiptCreator,
  getWeeklyReceipts,
  getWeeklyReceiptAndOrders,
} from "./weeklyReceiptsCreators";
//Gets weekly receipt for the current week for the app to work with
export const getWeeklyReceipt = () => async (dispatch) => {
  try {
    const today = new Date();
    const { data: weeklyReceipt } = await axios.get(`/receipts/${today}`);
    dispatch(setWeeklyReceiptCreator(weeklyReceipt));
  } catch (error) {
    // if the weekly receipt for that week was not created
    // we need to create one
    const { data: weeklyReceipt } = await axios.post("/receipts");
    dispatch(setWeeklyReceiptCreator(weeklyReceipt));
  }
};

export const getWeeklyReceiptsForDate = (year, week) => async (dispatch) => {
  const { data: weeklyReceipts } = await axios.get(`/receipts/${year}/${week}`);
  dispatch(getWeeklyReceipts(weeklyReceipts));
};
//Gets specific Receipt and Orders for the user to see
export const getWeeklyReceiptAndOrdersForUser = (userId, year, week) => async (
  dispatch
) => {
  const { data: payLoad } = await axios.get(
    `/receipts/${userId}/${year}/${week}`
  );
  console.log("action", payLoad);

  dispatch(getWeeklyReceiptAndOrders(payLoad));
};
