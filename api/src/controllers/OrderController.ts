import { Response, Request } from "express";
import OrderService from "../services/OrderService";
import Order from "../models/Order";

class UserOrderController {
  public async getAllByDate(req: Request, res: Response) {
    try {
      const userOrders = await OrderService.getAllByDate(req.params.date);
      res.send(userOrders);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async getByUserAndDate(req: any, res: any) {
    try {
      const { _id } = req.user;
      const { date } = req.params;
      const order = await OrderService.getByDateAndUser(_id, date);
      res.send(order);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async add(req: any, res: any) {
    try {
      const { _id: userId } = req.user;
      const order = await OrderService.add(userId);
      res.send(order);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async update(req: any, res: any) {
    try {
      const { orderId } = req.params;
      const order = await OrderService.update(orderId, req.body);
      res.send(order);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  public async sendOrders(req: any, res: any) {
    try {
      const orders = await OrderService.sendOrders(req.body);
      res.send(orders);
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
      console.log(error);
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
