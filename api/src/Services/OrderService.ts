import Order from "../models/Order";
import WeeklyReceipts from "../models/WeeklyReceipt";
import dateUtil from "../util/dateFormatting";
import OrderStatus from "../models/OrderStatus";
import WeeklyReceipt from "../models/WeeklyReceipt";

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
  public async getByDateAndUser(userId: string, dateTime: string) {
    const { startOfDay, endOfDay } = dateUtil.getStartAndEndOfDay(dateTime);
    const order = await Order.findOne({
      user: userId,
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    }).select("-weeklyReceipt");

    if (!order) {
      throw new Error("No order for current day.");
    }

    return order;
  }

  public async add(user: string) {
    // get weekly receipt for current week and logged user
    const { week, year } = dateUtil.getWeekAndYearNumber(new Date());
    const weeklyReceipt: any = await WeeklyReceipt.findOne({
      user,
      week,
      year
    });
    if (!weeklyReceipt) {
      throw new Error("Weekly receipt with that id doesn't exist.");
    }

    //create order
    let orderPayload: any = { user, weeklyReceipt };
    const order = await Order.create(orderPayload);
    // add it to weekly receipt
    weeklyReceipt.orders.push(order);
    await weeklyReceipt.save();
    return order;
  }

  public async update(orderId: string, orderUpdate: any) {
    await Order.findByIdAndUpdate(
      orderId,
      { $set: orderUpdate },
      { runValidators: true }
    );
    return await Order.findById(orderId);
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
