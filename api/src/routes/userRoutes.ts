import express from "express";

import UserController from "../controllers/UserController";
import AuthenticationMiddleware from "../middleware/AuthorizationMiddleware";

const router = express.Router();

router.get(
  "/",
  AuthenticationMiddleware.verifyToken,
  AuthenticationMiddleware.verifyPermission,
  UserController.getAll
);
router.get(
  "/:id",
  AuthenticationMiddleware.verifyToken,
  UserController.getById
);
router.post("/", UserController.add);
router.put("/:id", AuthenticationMiddleware.verifyToken, UserController.update);
router.delete(
  "/:id",
  AuthenticationMiddleware.verifyToken,
  AuthenticationMiddleware.verifyPermission,
  UserController.delete
);

export default router;
