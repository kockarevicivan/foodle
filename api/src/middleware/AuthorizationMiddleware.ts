import jwt from "jsonwebtoken";
import config from "../config";

class AuthenticationMiddleware {
  public async verifyToken(req: any, res: any, next: any) {
    try {
      const token = req.headers["authorization"];
      const userDecoded = await jwt.verify(token, config.secret);
      req.user = userDecoded;
      next();
    } catch (error) {
      return res.status(403).send(error);
    }
  }

  public async verifyPermission(req: any, res: any, next: any) {
    next();
    if (req.user.role === "admin") {
      next();
    } else {
      return res
        .status(403)
        .send(
          "Forbidden, you need administrator rights to access this feature"
        );
    }
  }
}

export default new AuthenticationMiddleware();
