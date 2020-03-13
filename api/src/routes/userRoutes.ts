import express from "express";

import UserController from "../controllers/UserController";
import AuthenticationMiddleware from "../middleware/AuthenticationMiddleware";

const router = express.Router();

router.get("/", AuthenticationMiddleware.verifyToken, UserController.getAll);
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
    UserController.delete
);

export default router;
