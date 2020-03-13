import User from "../models/User";
import bcrypt from "bcrypt";
class UserService {
    async add(userPayload: any) {
        const hashedPassword = await bcrypt.hash(userPayload.password, 10);
        userPayload.password = hashedPassword;
        const user = await User.create(userPayload);
        const id = user._id;
        const nest = User.findById(id).select(["username", "fullName"]);
        return nest;
    }

    async getAll() {
        return await User.find({}).select(["username", "fullname"]);
    }

    async getById(id: string) {
        return await User.findById(id).select(["username", "fullname"]);
    }

    async update(id: string, update: Object) {
        return await User.findByIdAndUpdate(id, { $set: update }).select([
            "username",
            "fullname"
        ]);
    }

    async delete(id: string) {
        return await User.findByIdAndDelete(id).select([
            "username",
            "fullname"
        ]);
    }
}

export default new UserService();
