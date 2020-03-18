import { Response, Request } from "express";
import OrderService from "../services/OrderService";
import Order from "../models/Order";

class UserOrderController {
  public async getAllByDate(req: Request, res: Response) {
    try {
      const userOrders = await OrderService.getAllByDate(req.params.date);
      res.send(userOrders);
    } catch (error) {
      res.status(400).send("Couldn't get user orders");
    }
  }

  public async getByUserAndDate(req: any, res: any) {
    try {
      const { _id } = req.user;
      const { date } = req.params;
      const userOrders = await OrderService.getAllByDateAndUser(_id, date);
      res.send(userOrders);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async add(req: any, res: any): Promise<any> {
    try {
      const userOrder = await OrderService.add(req.user._id, {});
      res.send(userOrder);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async sendOrder(req: any, res: any) {
    try {
      const { orderId } = req.params;
      const order = await OrderService.setStatusToSent(orderId);
      res.send(order);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async setTotal(req: any, res: any) {
    try {
      const { orderId } = req.params;
      const { totalPrice } = req.body;
      const order = await OrderService.setTotalPrice(orderId, totalPrice);
      res.send(order);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { userOrderId } = req.params;
      await OrderService.delete(userOrderId);
      res.send("User order was deleted");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

export default new UserOrderController();
