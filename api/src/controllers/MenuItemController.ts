import { Request, Response } from "express";

import MenuItemService from "../Services/MenuItemService";

class MenuItemController {
  public async getAllForDay(req: Request, res: Response) {
    try {
      const menuItems = await MenuItemService.getAllByDate(req.params.date);
      res.send(menuItems);
    } catch (error) {
      res.status(400).send("Something went wrong while getting menu items.");
    }
  }

  public async addForCurrentDay(req: Request, res: Response) {
    try {
      const menuItem = await MenuItemService.addForCurrentDay(req.body);
      res.send(menuItem);
    } catch (error) {
      res
        .status(400)
        .send("You didn't provide all necessary parameters for menu item!");
    }
  }

  public async update(req: Request, res: Response): Promise<any> {
    try {
      const menuItem = await MenuItemService.update(
        req.params.menuItemId,
        req.body
      );
      res.send(menuItem);
    } catch (error) {
      res.status(400).send("Couldn't update menu item.");
    }
  }

  public async delete(req: Request, res: Response): Promise<any> {
    try {
      await MenuItemService.delete(req.params.menuItemId);
      res.send(req.params.menuItemId);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

export default new MenuItemController();
