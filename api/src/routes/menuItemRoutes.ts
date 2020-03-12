import express from "express";

const router = express.Router();

router.get("/:week");
router.post("/");
router.put("/:menuItemId");
router.delete("/:menuItemId");

export default router;
