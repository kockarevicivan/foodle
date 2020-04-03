import axios from "../../../axios";
import {
  getAllForDayCreator,
  createItemCreator,
  editItemCreator,
  removeItemCreator
} from "./menuCreators";

export const getAllForDay = () => async dispatch => {
  const today = new Date();
  const { data } = await axios.get(`/menuItems/${today}`);
  dispatch(getAllForDayCreator(data));
};

export const createItem = payLoad => async dispatch => {
  const { data } = await axios.post("/menuItems/", payLoad);
  dispatch(createItemCreator(data));
};

export const editItem = (itemId, payLoad) => async dispatch => {
  const { data } = await axios.put(`/menuItems/${itemId}`, payLoad);
  dispatch(editItemCreator(data));
};

export const removeItem = itemId => async dispatch => {
  const { data } = await axios.delete(`/menuItems/${itemId}`);
  dispatch(removeItemCreator(data));
};
