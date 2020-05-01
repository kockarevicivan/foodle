import WeeklyReceipts from "../models/WeeklyReceipt";
import { log } from "util";
import User from "../models/User";
import Order from "../models/Order";

class WeeklyReceiptService {
  public async add(user: string, dateTime: any) {
    const date = this.getWeekAndYearNumber(dateTime);
    let receiptPayload = {
      year: date[0],
      week: date[1],
      user,
    };

    const { _id } = await WeeklyReceipts.create(receiptPayload);
    const receipt = await WeeklyReceipts.findById(_id).select("-orders -__v");
    return receipt;
  }

  public async getAll() {
    return await WeeklyReceipts.find({});
  }
  // Gets a specific receipt for a user
  public async getByUserId(userId: String, year: number, week: number) {
    const weeklyReceipt: any = await WeeklyReceipts.find({
      user: userId,
      year,
      week,
    });

    if (!weeklyReceipt) {
      throw new Error(
        "Weekly receipt was not created for this week. You need to create one."
      );
    }
    const orders = await this.orderHelper(weeklyReceipt);

    return { weeklyReceipt, orders };
  }
  //Gets all receipts for a specific week
  public async getByUserIdAndWeek(user: string, dateTime: any) {
    const weekAndYear = this.getWeekAndYearNumber(new Date(dateTime));
    const weeklyReceipt = await WeeklyReceipts.findOne({
      user,
      year: weekAndYear[0],
      week: weekAndYear[1],
    }).select("-orders -__v");

    if (!weeklyReceipt) {
      throw new Error(
        "Weekly receipt was not created for this week. You need to create one."
      );
    }

    return weeklyReceipt;
  }

  public async getByYearAndWeek(year: number, week: number) {
    const weeklyReceipts: any = await WeeklyReceipts.find({
      year,
      week,
    });

    if (!weeklyReceipts) {
      throw new Error(
        "Weekly receipt was not created for this week. You need to create one."
      );
    }

    const nameList = await this.nameHelper(weeklyReceipts);

    return { weeklyReceipts, nameList };
  }

  public async update(id: string, update: any) {
    await WeeklyReceipts.findByIdAndUpdate(
      id,
      { $set: update },
      { runValidators: true }
    );
    return await WeeklyReceipts.findById(id);
  }

  public async delete(id: string) {
    return await WeeklyReceipts.findByIdAndDelete(id);
  }

  private async nameHelper(weeklyReceipts: any) {
    const nameList: Array<any> = [];
    for (const receipt of weeklyReceipts) {
      const user: any = await User.findOne({ _id: receipt.user });
      nameList.push(user.fullName);
      console.log(1, nameList);
    }
    return nameList;
  }

  private async orderHelper(weeklyReceipts: any) {
    const orderList: Array<any> = [];
    const orders = weeklyReceipts[0].orders;

    for (let i = 0; i < orders.length; i++) {
      const order = await Order.findOne({ _id: orders[i] });
      orderList.push(order);
    }
    return orderList;
  }

  //Method returns the number of the week since the year started
  private getWeekAndYearNumber(d: any) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart: any = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    // Return array of year and week number
    const date = [d.getUTCFullYear(), weekNo];
    return date;
  }
}

export default new WeeklyReceiptService();
