import express from "express";

import MenuItemController from "../controllers/MenuItemController";

const router = express.Router();

router.get("/:week", MenuItemController.getMenuItemsForWeek);
router.post("/", MenuItemController.addMenuItemForCurrentWeek);
router.put("/:menuItemId", MenuItemController.update);
router.delete("/:menuItemId", MenuItemController.delete);

export default router;
