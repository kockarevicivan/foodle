import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import config from "../config";
import User from "../models/User";

class AuthenticationService {
    public async authenticateUser(
        username: string,
        password: string
    ): Promise<any> {
        const user: any = await User.findOne({ username });
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            return user;
        } else {
            throw new Error("Authentication failed.");
        }
    }

    public async generateToken(user: any): Promise<string> {
        const payload = {
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName
        };

        return await jwt.sign(payload, config.secret);
    }
}

export default new AuthenticationService();
