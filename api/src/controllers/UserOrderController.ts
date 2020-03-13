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

  public async getByUserAndDate(req: Request, res: Response) {}

  public async add(req: any, res: any): Promise<any> {
    try {
      const userOrder = await UserOrderService.add(req.user._id, {});
      res.send(userOrder);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async update(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }

  public async delete(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
}

export default new UserOrderController();
