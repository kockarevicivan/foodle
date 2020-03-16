import WeeklyReceipts from "../models/WeeklyReceipts";

class WeeklyReceiptService {
    async add(receiptPayload: any) {
        return await WeeklyReceipts.create(receiptPayload);
    }

    async getAll() {
        return await WeeklyReceipts.find({});
    }

    async getByUserId(userId: string) {
        return await WeeklyReceipts.find({ user: userId });
    }
    async getByUserIdAndWeek(userId: string, week) {
        return await WeeklyReceipts.find({ user: userId });
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
}

export default new WeeklyReceiptService();
