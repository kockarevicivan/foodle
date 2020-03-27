import express from "express";

import LoginController from "../controllers/LoginController";
import AuthorizationMiddleware from "../middleware/AuthorizationMiddleware";

const router = express.Router();

router.post("/login", LoginController.login);
router.get(
  "/verify",
  AuthorizationMiddleware.verifyToken,
  LoginController.isAuthenticated
);

export default router;
