import express from "express";
import OrderItemController from "../controllers/OrderItemController";

const router = express.Router();

// orderItem sub routes
router.post("/:orderId", OrderItemController.add);
router.put("/:orderId/:orderItemIndex", OrderItemController.update);
router.delete("/:orderId/:orderItemIndex", OrderItemController.delete);

export default router;
