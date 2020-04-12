import express from "express";

import OrderController from "../controllers/OrderController";
import AuthorizationMiddleware from "../middleware/AuthorizationMiddleware";
import UserOrderMiddleware from "../middleware/OrderMiddleware";

const router = express.Router();

router.use(AuthorizationMiddleware.verifyToken);
// get user orders for a given week for every user
router.get(
  "/everyUser/:date",
  AuthorizationMiddleware.verifyPermission,
  OrderController.getAllByDate
);
// get an order for a given day
router.get("/:date", OrderController.getByUserAndDate);
router.post("/", OrderController.add);
router.put("/:orderId", OrderController.update);
router.patch("/send", OrderController.sendOrders);
router.patch("/setTotal/:orderId", OrderController.setTotal);
router.delete(
  "/:orderId",
  AuthorizationMiddleware.verifyPermission,
  UserOrderMiddleware.checkIfUserOrderExists,
  OrderController.delete
);

export default router;
