import express from "express";

const router = express.Router();

// get user orders for a given week for every user
router.get("/:date");
// get user order for a given week for a given user
router.get("/:userId/:date");
router.post("/:userId");
router.put("/:orderId");
router.delete("/:orderId");

export default router;
