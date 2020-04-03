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
    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error("Authentication failed.");
    }

    return user;
  }

  public async generateToken(user: any): Promise<string> {
    const payload = {
      _id: user._id,
      username: user.username,
      fullName: user.fullName,
      role: user.role
    };
    const jwtOptions = {
      expiresIn: "6h"
    };
    return await jwt.sign(payload, config.secret, jwtOptions);
  }
}

export default new AuthenticationService();
