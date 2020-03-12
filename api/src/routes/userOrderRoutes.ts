import express from "express";

import UserOrderController from "../controllers/UserOrderController";

const router = express.Router();

// get user orders for a given week for every user
router.get("/:date", UserOrderController.getAllByDate);
// get user order for a given week for a given user
router.get("/:userId/:date", UserOrderController.getByUserAndDate);
router.post("/:userId", UserOrderController.add);
router.put("/:orderId", UserOrderController.update);
router.delete("/:orderId", UserOrderController.delete);

export default router;
