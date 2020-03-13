import express from "express";

import MenuItemController from "../controllers/MenuItemController";
import AuthorizationMiddleware from "../middleware/AuthorizationMiddleware";

const router = express.Router();

router.use(AuthorizationMiddleware.verifyToken);
router.get("/:date", MenuItemController.getMenuItemsForDay);
router.post(
  "/",
  AuthorizationMiddleware.verifyPermission,
  MenuItemController.addMenuItemForCurrentDay
);
router.put(
  "/:menuItemId",
  AuthorizationMiddleware.verifyPermission,
  MenuItemController.update
);
router.delete(
  "/:menuItemId",
  AuthorizationMiddleware.verifyPermission,
  MenuItemController.delete
);

export default router;
