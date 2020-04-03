import express from "express";

import WeeklyReceiptController from "../controllers/WeeklyReceiptController";
import AuthorizationMiddleware from "../middleware/AuthorizationMiddleware";

const router = express.Router();

router.use(AuthorizationMiddleware.verifyToken);
router.post("/", WeeklyReceiptController.add);
// router.get("/:userId", WeeklyReceiptController.getByUserId);
router.get("/:dateTime", WeeklyReceiptController.getByUserIdAndWeek);
router.put("/:receiptId", WeeklyReceiptController.update);
router.delete("/:receiptId", WeeklyReceiptController.delete);

export default router;
