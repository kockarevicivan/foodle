import express from "express";

import WeeklyReceiptController from "../controllers/WeeklyReceiptController";

const router = express.Router();

router.get("/:userId", WeeklyReceiptController.getByUser);
router.get("/:userId/:week", WeeklyReceiptController.getByUserIdAndWeek);
router.post("/:receiptId", WeeklyReceiptController.add);
router.put("/:receiptId", WeeklyReceiptController.update);
router.delete("/:receiptId", WeeklyReceiptController.delete);

export default router;
