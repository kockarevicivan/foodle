import axios from "../../../axios";
import {
  setMenuCreator,
  addMenuItemCreator,
  addManyMenuItemsCreator,
  editItemCreator,
  removeItemCreator,
} from "./menuCreators";

export const getTodaysMenu = () => async (dispatch) => {
  try {
    const now = new Date();
    const { data: menu } = await axios.get(`/menu/${now}`);
    dispatch(setMenuCreator(menu));
  } catch (error) {
    const { data: menu } = await axios.post("/menu");
    console.log(menu);
    dispatch(setMenuCreator(menu));
  }
};

export const addMenuItem = (payLoad, menuId) => async (dispatch) => {
  const { data: menuItem } = await axios.put(`/menu/${menuId}`, payLoad);
  dispatch(addMenuItemCreator(menuItem));
};

export const addManyMenuItems = (menuItemArray, menuId) => async (dispatch) => {
  const { data: menu } = await axios.put(`/menu/${menuId}/addmany`, menuItemArray);
  dispatch(setMenuCreator(menu));
};

export const editItem = (itemId, payLoad) => async (dispatch) => {
  const { data } = await axios.put(`/menuItems/${itemId}`, payLoad);
  dispatch(editItemCreator(data));
};

export const removeItem = (itemId, index) => async (dispatch) => {
  await axios.delete(`/menu/${itemId}/${index}`);
  dispatch(removeItemCreator(index));
};
