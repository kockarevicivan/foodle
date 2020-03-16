import WeeklyReceipts from "../models/WeeklyReceipts";

class WeeklyReceiptService {
  async add(receiptPayload: any, dateTime: any) {
    const date = await this.getWeekNumber(dateTime);
    receiptPayload.year = date[0];
    receiptPayload.week = date[1];

    const receipt = await WeeklyReceipts.create(receiptPayload);
    return await WeeklyReceipts.find({ _id: receipt._id });
  }

  async getAll() {
    return await WeeklyReceipts.find({});
  }

  async getByUserId(userId: string) {
    return await WeeklyReceipts.find({ user: userId });
  }

  async getByUserIdAndWeek(userId: string, dateTime: any) {
    return await WeeklyReceipts.find({
      user: userId,
      year: dateTime[0],
      week: dateTime[1]
    });
  }

  async update(id: string, update: any) {
    await WeeklyReceipts.findByIdAndUpdate(
      id,
      { $set: update },
      { runValidators: true }
    );
    return await WeeklyReceipts.findById(id);
  }

  async delete(id: string) {
    return await WeeklyReceipts.findByIdAndDelete(id);
  }
  //Method returns the number of the week since the year started
  async getWeekNumber(d: any) {
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
