import jwt from "jsonwebtoken";

import config from "../config";

class AuthenticationMiddleware {
  public async verifyToken(req: any, res: any, next: any) {
    try {
<<<<<<< HEAD
      const token = req.headers["authorization"];
=======
      next();
      const token = req.headers["authorization"].split(" ")[1];
>>>>>>> 7d4da286c217a15685423b0f75f7879bd8fa144b
      const userDecoded = await jwt.verify(token, config.secret);
      req.user = userDecoded;
      next();
    } catch (error) {
      console.log(error);
      res.status(403).send(error);
    }
  }

  public async verifyPermission(req: any, res: any, next: any) {
    next();
    if (req.user.role === "admin") {
      next();
    } else {
      res
        .status(403)
        .send(
          "Forbidden, you need administrator rights to access this feature"
        );
    }
  }
}

export default new AuthenticationMiddleware();
