import MenuItem from "../models/MenuItem";
import Order from "../models/Order";
import OrderItem from "../models/OrderItemSchema";

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

  // prosledi mu samo id ordera i index itema
  public async remove() {}

  // isto kao za remove i jos item payload
  public async edit() {}
}

export default new OrderItemService();
