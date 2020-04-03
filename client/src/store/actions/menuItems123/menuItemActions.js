import axios from "../../../axios";
import { getMenuItemsCreator } from "./menuItemCreators";

export const getMenuItems = () => async dispatch => {
  const today = new Date();
  const { data } = await axios.get(`/menuItems/${today}`);
  dispatch(getMenuItemsCreator(data));
};
