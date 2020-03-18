import Order from "../models/Order";
import WeeklyReceipts from "../models/WeeklyReceipt";
import dateUtil from "../util/dateFormatting";
import OrderStatus from "../models/OrderStatus";

class OrderService {
  /**
   * Gets all user orders for a provided date
   * @param dateTime
   */
  public async getAllByDate(dateTime: string) {
    const { startOfDay, endOfDay } = dateUtil.getStartAndEndOfDay(dateTime);
    const orders: any = await Order.find({
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    }).populate({ path: "orderItems.menuItem", select: "title price _id" });

    return orders;
  }

  /**
   * Gets a user order (or user orders if there are more than one)
   *  for a specific user and for a specific day
   * @param userId
   * @param dateTime
   */
  public async getAllByDateAndUser(userId: string, dateTime: string) {
    const { startOfDay, endOfDay } = dateUtil.getStartAndEndOfDay(dateTime);
    const orders = Order.findOne({
      user: userId,
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    }).populate({ path: "orderItems.menuItem", select: "title price _id" });

    return orders;
  }

  /**
   * Creates a user order and adds it to the
   * @param userId
   * @param orderPayload
   */
  public async add(userId: string, orderPayload: any) {
    const weeklyReceipt: any = await WeeklyReceipts.create({ user: userId });
    console.log(weeklyReceipt);
    //create user order
    orderPayload.user = userId;
    orderPayload.weeklyReceipt = weeklyReceipt._id;
    const order = await Order.create(orderPayload);

    // add it to weekly receipt
    weeklyReceipt.orders.push(order);
    await weeklyReceipt.save();
    return order;
  }

  public async setStatusToSent(orderId: string) {
    const order: any = await Order.findById(orderId);
    if (order.status == OrderStatus.Finalized) {
      throw new Error("Order status cannot be changed from Finalized to Sent");
    }

    order.status = OrderStatus.Sent;
    await order.save();
    return order;
  }

  public async setTotalPrice(orderId: string, totalPrice: number) {
    const order: any = await Order.findById(orderId);
    if (order.status == OrderStatus.Processing) {
      throw new Error(
        "You cannot set total price if order doesn't have status Sent"
      );
    }

    if (totalPrice < 0) {
      throw new Error("Total price must be greater than 0");
    }

    order.status = OrderStatus.Finalized;
    order.totalPrice = totalPrice;
    await order.save();
    return order;
  }

  public async delete(orderId: string) {
    await Order.findByIdAndDelete(orderId);
  }
}

export default new OrderService();
