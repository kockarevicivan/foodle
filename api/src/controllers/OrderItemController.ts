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

  public async update(req: any, res: any) {
    try {
      const { orderId, orderItemIndex } = req.params;
      const orderItem = await OrderItemService.update(
        orderId,
        orderItemIndex,
        req.body
      );
      res.send(orderItem);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  // /:orderId/:orderItemIndex"
  public async delete(req: any, res: any) {
    try {
      const { orderId, orderItemIndex } = req.params;
      await OrderItemService.delete(orderId, orderItemIndex);
      res.send("Order item deleted");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

export default new OrderItemController();
