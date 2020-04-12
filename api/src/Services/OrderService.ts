import Order from "../models/Order";
import WeeklyReceipts from "../models/WeeklyReceipt";
import dateUtil from "../util/dateFormatting";
import OrderStatus from "../models/OrderStatus";
import WeeklyReceipt from "../models/WeeklyReceipt";

class OrderService {
  public async getAllByDate(dateTime: string) {
    const { startOfDay, endOfDay } = dateUtil.getStartAndEndOfDay(dateTime);
    const orders: any = await Order.find({
      createdAt: { $gte: startOfDay, $lte: endOfDay },
    }).populate({ path: "user", select: "fullName" });

    return orders;
  }

  public async getByDateAndUser(userId: string, dateTime: string) {
    const { startOfDay, endOfDay } = dateUtil.getStartAndEndOfDay(dateTime);
    const order = await Order.findOne({
      user: userId,
      createdAt: { $gte: startOfDay, $lte: endOfDay },
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
      year,
    });
    if (!weeklyReceipt) {
      throw new Error("Weekly receipt with that id doesn't exist.");
    }

    //create order
    let orderPayload: any = { user, weeklyReceipt: weeklyReceipt._id };
    const order = await Order.create(orderPayload);
    // add it to weekly receipt
    weeklyReceipt.orders.push(order);
    await weeklyReceipt.save();
    return order;
  }

  public async update(orderId: string, orderUpdate: any) {
    const order: any = await Order.findById(orderId);
    if (order.status !== OrderStatus.Processing) {
      throw new Error(
        "You can't change an order that has been sent or finalized."
      );
    }
    await order.updateOne({ $set: orderUpdate }, { runValidators: true });
    const updatedOrder = await Order.findById(orderId);
    return updatedOrder;
  }

  public async sendOrders(orderIds: [string]) {
    let orders: any[] = [];
    for (let orderId of orderIds) {
      const order = await this.setStatusToSent(orderId);
      orders.push(order);
    }

    return orders;
  }

  private setStatusToSent = async (orderId: string) => {
    const order: any = await Order.findById(orderId).populate({
      path: "user",
      select: "fullName",
    });
    if (order.status !== OrderStatus.Processing) {
      throw new Error("Order status cannot be set to sent.");
    }

    order.status = OrderStatus.Sent;
    await order.save();
    return order;
  };

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
