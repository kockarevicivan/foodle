import { Request, Response } from "express";

import AuthenticationService from "../Services/AuthenticationService";

class LoginController {
  public async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await AuthenticationService.authenticateUser(
        username,
        password
      );
      const token = await AuthenticationService.generateToken(user);
      res.send({ username, token, role: user.role });
    } catch {
      res.status(400).send("Username or password are incorrect!");
    }
  }

  public async isAuthenticated(req: any, res: any) {
    res.send(req.user);
  }
}

export default new LoginController();
