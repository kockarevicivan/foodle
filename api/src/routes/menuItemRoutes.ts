import express from "express";

import MenuItemController from "../controllers/MenuItemController";

const router = express.Router();

router.get("/:date", MenuItemController.getMenuItemsForDay);
router.post("/", MenuItemController.addMenuItemForCurrentDay);
router.put("/:menuItemId", MenuItemController.update);
router.delete("/:menuItemId", MenuItemController.delete);

export default router;
