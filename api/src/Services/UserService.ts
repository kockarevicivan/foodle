import User from "../models/User";
import bcrypt from "bcrypt";
class UserService {
    async add(userPayload: any) {
        const hashedPassword = await bcrypt.hash(userPayload.password, 10);
        userPayload.password = hashedPassword;

        const user = await User.create(userPayload);
        const userContainer = User.findById(user._id).select(
            "-password -weeklyReceipts -__v"
        );
        return userContainer;
    }

    async getAll() {
        return await User.find({}).select("-password -weeklyReceipts -__v");
    }

    async getById(id: string) {
        return await User.findById(id).select("-password -weeklyReceipts -__v");
    }

    async update(id: string, update: any) {
        await User.findByIdAndUpdate(
            id,
            { $set: update },
            { runValidators: true }
        );
        return await User.findById(id).select("-password -weeklyReceipts -__v");
    }

    async delete(id: string) {
        await User.findByIdAndDelete(id);
    }
}

export default new UserService();
