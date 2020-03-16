import express from "express";

import WeeklyReceiptController from "../controllers/WeeklyReceiptController";

const router = express.Router();

router.post("/", WeeklyReceiptController.add);
router.get("/:userId", WeeklyReceiptController.getByUserId);
router.get("/:userId/:week", WeeklyReceiptController.getByUserIdAndWeek);
router.put("/:receiptId", WeeklyReceiptController.update);
router.delete("/:receiptId", WeeklyReceiptController.delete);

export default router;
