import jwt from "jsonwebtoken";

import config from "../config";

class AuthenticationMiddleware {
    public async verifyToken(req: any, res: any, next: any) {
        try {
            const userDecoded = await jwt.verify(
                req.headers["authorization"],
                config.secret
            );
            req.user = userDecoded;
            next();
        } catch (error) {
            res.status(403).send("Forbidden");
        }
    }
}

export default new AuthenticationMiddleware();
