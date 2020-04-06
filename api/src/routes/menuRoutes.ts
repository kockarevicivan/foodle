import express from "express";

import MenuItemController from "../controllers/MenuController";
import AuthorizationMiddleware from "../middleware/AuthorizationMiddleware";

const router = express.Router();

router.use(AuthorizationMiddleware.verifyToken);
router.get("/:date", MenuItemController.getByDate);
router.post(
  "/",
  AuthorizationMiddleware.verifyPermission,
  MenuItemController.createMenuForToday
);
router.put(
  "/:menuId",
  AuthorizationMiddleware.verifyPermission,
  MenuItemController.addMenuItemToCurrentMenu
);
// router.delete(
//   "/:menuItemId",
//   AuthorizationMiddleware.verifyPermission,
//   MenuItemController.delete
// );

export default router;
