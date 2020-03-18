import OrderItemService from "../services/OrderItemService";

class OrderItemController {
  public async add(req: any, res: any) {
    try {
      const { orderId } = req.params;
      const { menuItemId, quantity } = req.body;
      const orderItem = await OrderItemService.add(
        menuItemId,
        quantity,
        orderId
      );
      res.send(orderItem);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async update(req: any, res: any) {}

  public async delete(req: any, res: any) {}
}

export default new OrderItemController();
