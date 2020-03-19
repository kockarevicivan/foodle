import UserOrder from "../models/Order";

class UserOrderMiddleware {
  /**
   * Checks if a user orders with given id exists and if it can be modified.
   * @param req
   * @param res
   * @param next
   */

  public async checkIfUserOrderExists(req: any, res: any, next: any) {
    const { userOrderId } = req.params;
    const userOrder: any = await UserOrder.findById(userOrderId);

    if (!userOrder) {
      return res.status(400).send("User order with that id doesn't exist.");
    } else if (userOrder.sent) {
      return res
        .status(400)
        .send("User order that has been sent cannot be modified.");
    }

    next();
  }
}

export default new UserOrderMiddleware();
