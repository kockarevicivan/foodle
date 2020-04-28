import axios from "../../../axios";
import { setWeeklyReceiptCreator,getWeeklyReceipts } from "./weeklyReceiptsCreators";

export const getWeeklyReceipt = () => async dispatch => {
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
}

export const getWeeklyReceiptsForDate = (year, week) => async dispatch => {
    const { data: weeklyReceipts } = await axios.get(`/receipts/${year}/${week}`);
    console.log(1,weeklyReceipts);
    
    dispatch(getWeeklyReceipts(weeklyReceipts));
  
};
