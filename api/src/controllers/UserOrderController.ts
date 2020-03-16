import { Response, Request } from "express";
import UserOderService from "../services/UserOrderService";
import UserOrderService from "../services/UserOrderService";

class UserOrderController {
  public async getAllByDate(req: Request, res: Response) {
    try {
      const userOrders = await UserOderService.getAllByDate(req.params.date);
      res.send(userOrders);
    } catch (error) {
      res.status(400).send("Couldn't get user orders");
    }
  }

  public async getByUserAndDate(req: any, res: any) {
    try {
      const { _id } = req.user;
      const { date } = req.params;
      const userOrders = await UserOrderService.getAllByDateAndUser(_id, date);
      res.send(userOrders);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async add(req: any, res: any): Promise<any> {
    try {
      const userOrder = await UserOrderService.add(req.user._id, {});
      res.send(userOrder);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async update(req: any, res: any) {
    try {
      const { userOrderId } = req.params;
      const updatedUserOrder = await UserOrderService.update(
        userOrderId,
        req.body
      );
      res.send(updatedUserOrder);
    } catch (error) {
      res.status(400).send("User order was not updated!");
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { userOrderId } = req.params;
      await UserOrderService.delete(userOrderId);
      res.send("User order was deleted");
    } catch (error) {
      res.status(400).send("User order with that id doesn't exist.");
    }
  }
}

export default new UserOrderController();
