import MenuItem from "../models/Menu";
import Order from "../models/Order";

class OrderItemService {
  // prosledi mu id menuitema i kolicinu
  public async add(menuItemId: string, quantity: number, orderId: string) {
    const menuItem = await MenuItem.findById(menuItemId);
    if (!menuItem) {
      throw new Error("Menu item with that id doesn't exist");
    }

    const order: any = await Order.findById(orderId);
    if (!order) {
      throw new Error("Order with that id doesn't exist");
    }

    order.orderItems.push({ menuItem, order, quantity });
    await order.save();
    return order;
  }

  public async update(
    orderId: string,
    orderItemIndex: number,
    orderItemUpdate: any
  ) {
    const order: any = await Order.findById(orderId);
    if (!order) {
      throw new Error("Order with that id doesn't exist");
    }

    Object.assign(order.orderItems[orderItemIndex], orderItemUpdate);
    await order.save();
    return order;
  }

  public async delete(orderId: string, orderItemIndex: string) {
    const order: any = await Order.findById(orderId);
    order.orderItems.splice(orderItemIndex, 1);
    await order.save();
  }
}

export default new OrderItemService();
