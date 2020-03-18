import MenuItem from "../models/MenuItem";
import Order from "../models/Order";
import OrderItem from "../models/OrderItem";

class OrderItemService {
  // prosledi mu id menuitema i kolicinu
  public async addItemToOrder(
    menuItemId: string,
    quantity: number,
    orderId: string
  ) {
    const menuItem = await MenuItem.findById(menuItemId);
    if (!menuItem) {
      throw new Error("Menu item with that id doesn't exist");
    }

    const order = await Order.findById(orderId);
    if (!order) {
      throw new Error("Order with that id doesn't exist");
    }

    const orderItem = await OrderItem.create({ menuItem, order, quantity });
    return orderItem;
  }

  // prosledi mu samo id ordera i index itema
  public async removeItemFromOrder() {}

  // isto kao za remove i jos item payload
  public async editItemFromOrder() {}
}

export default new OrderItemService();
