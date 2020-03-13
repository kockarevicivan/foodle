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

    public async verifyPermission(req: any, res: any, next: any) {
        req.user;
        if (req.user.role === "admin") {
            next();
        } else {
            res.status(403).send(
                "Forbidden, you need administrator rights to access this feature"
            );
        }
    }
}

export default new AuthenticationMiddleware();
