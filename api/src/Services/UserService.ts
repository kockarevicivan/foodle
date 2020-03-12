import User from "../models/User";
import bcrypt from "bcryptjs";
class UserService {
    async add(user: any) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;

        return await User.create(user);
    }

    async getAll() {
        return await User.find({});
    }

    async getById(id: string) {
        return await User.findById(id);
    }

    async update(id: string, updateOps: Object) {
        return await User.findByIdAndUpdate(id, { $set: updateOps });
    }
    async delete(id: string) {
        return await User.findByIdAndDelete(id);
    }
}

export default new UserService();
