import {
  addItemToOrderCreator,
  setQuantityCreator,
  removeOrderItemCreator,
  setOrderCreator,
  setAllOrdersCreator,
  setTotalCreator,
} from "./orderCreators";
import axios from "../../../axios";

export const addItemToOrder = (menuItem) => (dispatch) => {
  dispatch(addItemToOrderCreator(menuItem));
};

export const setQuantity = (index, quantity) => (dispatch) => {
  dispatch(setQuantityCreator(index, quantity));
};

export const removeOrderItem = (index) => (dispatch) => {
  dispatch(removeOrderItemCreator(index));
};

export const getTodaysOrder = () => async (dispatch) => {
  try {
    const today = new Date();
    const { data: order } = await axios.get(`/orders/${today}`);
    dispatch(setOrderCreator(order));
  } catch (error) {
    const { data: order } = await axios.post("/orders");
    dispatch(setOrderCreator(order));
  }
};

export const updateOrder = (order) => async (dispatch) => {
  const { data } = await axios.put(`/orders/${order._id}`, order);
  console.log(data);
  dispatch(setOrderCreator(data));
};

export const setTotal = (orderId, totalPrice) => async (dispatch) => {
  const { data: order } = await axios.patch(`/orders/setTotal/${orderId}`, {
    totalPrice,
  });
  dispatch(setTotalCreator(order));
};

export const getAllTodaysOrders = () => async (dispatch) => {
  const today = new Date();
  const { data: orders } = await axios.get(`/orders/everyUser/${today}`);
  dispatch(setAllOrdersCreator(orders));
};

export const sendAllOrders = (orderIds, menuId) => async (dispatch) => {
  await axios.patch(`/menu/${menuId}`, { ordersSent: true });
  const { data: orders } = await axios.patch("/orders/send", orderIds);
  dispatch(setAllOrdersCreator(orders));
};
