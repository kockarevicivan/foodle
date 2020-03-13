import express from "express";

import UserOrderController from "../controllers/UserOrderController";
import AuthorizationMiddleware from "../middleware/AuthorizationMiddleware";

const router = express.Router();

router.use(AuthorizationMiddleware.verifyToken);
// get user orders for a given week for every user
router.get("/:date", UserOrderController.getAllByDate);
// get user order for a given week for a given user
router.get("/:userId/:date", UserOrderController.getByUserAndDate);
router.post("/", UserOrderController.add);
router.put("/:orderId", UserOrderController.update);
router.delete("/:orderId", UserOrderController.delete);

export default router;
