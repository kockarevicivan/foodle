import { Request, Response } from "express";

import AuthenticationService from "../Services/AuthenticationService";

class LoginController {
    public async login(req: Request, res: Response): Promise<any> {
        try {
            const { username, password } = req.body;
            const user = await AuthenticationService.authenticateUser(
                username,
                password
            );
            const token = await AuthenticationService.generateToken(user);
            res.send({ username, token });
        } catch {
            res.status(400).send("Username or password are incorrect!");
        }
    }
}

export default new LoginController();
