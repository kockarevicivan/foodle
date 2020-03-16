import UserOrder from "../models/UserOrder";
import WeeklyReceipts from "../models/WeeklyReceipt";
import dateUtil from "../util/dateFormatting";
import User from "../models/User";
import WeeklyReceipt from "../models/WeeklyReceipt";

class UserOrderService {
  /**
   * Gets all user orders for a provided date
   * @param dateTime
   */
  public async getAllByDate(dateTime: string) {
    const { startOfDay, endOfDay } = dateUtil.getStartAndEndOfDay(dateTime);
    const userOrders = await UserOrder.find({
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    });
    return userOrders;
  }

  /**
   * Gets a user order (or user orders if there are more than one)
   *  for a specific user and for a specific day
   * @param userId
   * @param dateTime
   */
  public async getAllByDateAndUser(userId: string, dateTime: string) {
    const { startOfDay, endOfDay } = dateUtil.getStartAndEndOfDay(dateTime);
    const userOrders = UserOrder.find({
      user: userId,
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    });

    return userOrders;
  }

  /**
   * Creates a user order and adds it to the
   * @param userId
   * @param userOrderPayload
   */
  public async add(userId: string, userOrderPayload: any) {
    let weeklyReceipt: any = await this.getOrCreateWeeklyReceipt(userId);

    //create user order
    userOrderPayload.user = userId;
    userOrderPayload.weeklyReceipt = weeklyReceipt._id;
    const userOrder = await UserOrder.create(userOrderPayload);

    // add it to weekly receipt
    weeklyReceipt.userOrders.push(userOrder);
    await weeklyReceipt.save();
    return userOrder;
  }

  private async getOrCreateWeeklyReceipt(userId: string) {
    const currentDate = new Date();
    const { startOfDay, endOfDay } = dateUtil.getStartAndEndOfDay(
      currentDate.toString()
    );

    const filter = {
      user: userId,
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    };

    if (!(await WeeklyReceipts.exists(filter))) {
      return await WeeklyReceipts.create({ user: userId });
    } else {
      return await WeeklyReceipts.findOne(filter);
    }
  }

  public async update(userOrderId: string, userOrderUpdate: any) {
    await UserOrder.findByIdAndUpdate(userOrderId, userOrderUpdate, {
      runValidators: true
    });
    const userOrder = await UserOrder.findById(userOrderId);
    return userOrder;
  }

  public async delete(userOrderId: string) {
    await UserOrder.findByIdAndDelete(userOrderId);
  }
}

export default new UserOrderService();
