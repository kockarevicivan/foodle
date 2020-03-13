import { Request, Response } from "express";

import MenuItemService from "../services/MenuItemService";

class MenuItemController {
  public async getMenuItemsForDay(req: Request, res: Response) {
    try {
      const menuItems = await MenuItemService.getAllByDate(req.params.date);
      res.send(menuItems);
    } catch (error) {
      res.status(400).send("Something went wrong while getting menu items.");
    }
  }

  public async addMenuItemForCurrentDay(req: Request, res: Response) {
    try {
      const menuItem = await MenuItemService.addForCurrentDay(req.body);
      res.send(menuItem);
    } catch (error) {
      res.status(400).send("You didn't provide all necessary parameters!");
    }
  }

  public async update(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public async delete(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

export default new MenuItemController();
