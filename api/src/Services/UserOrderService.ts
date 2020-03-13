import UserOrder from "../models/UserOrder";
import WeeklyReceipts from "../models/WeeklyReceipt";
import dateUtil from "../util/dateFormatting";
import { start } from "repl";

class UserOrderService {
  public async getAllByDate(dateTime: string) {
    const { startOfDay, endOfDay } = dateUtil.getStartAndEndOfDay(dateTime);
    const userOrders = await UserOrder.find({
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    });
    return userOrders;
  }

  public async add(userId: string, userOrderPayload: any) {
    let weeklyReceipt: any = await this.getOrCreateWeeklyReceipt(userId);
    userOrderPayload.weeklyReceipt = weeklyReceipt._id;
    const userOrder = await UserOrder.create(userOrderPayload);
    weeklyReceipt.userOrders.push(userOrder);
    await weeklyReceipt.save();
    return userOrder;
  }

  private async getOrCreateWeeklyReceipt(userId: string) {
    const currentDate = new Date();
    console.log(currentDate);
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
}

export default new UserOrderService();
