import express from "express";

import OrderController from "../controllers/OrderController";
import AuthorizationMiddleware from "../middleware/AuthorizationMiddleware";
import UserOrderMiddleware from "../middleware/OrderMiddleware";
import OrderItemController from "../controllers/OrderItemController";

const router = express.Router();

router.use(AuthorizationMiddleware.verifyToken);
// get user orders for a given week for every user
router.get(
  "/everyUser/:date",
  AuthorizationMiddleware.verifyPermission,
  OrderController.getAllByDate
);
// get user order for a given week for a given user
router.get("/:date", OrderController.getByUserAndDate);
router.post("/:weeklyReceiptId", OrderController.add);
router.patch("/send/:orderId", OrderController.sendOrder);
router.patch("/setTotal/:orderId", OrderController.setTotal);
router.delete(
  "/:orderId",
  AuthorizationMiddleware.verifyPermission,
  UserOrderMiddleware.checkIfUserOrderExists,
  OrderController.delete
);

export default router;