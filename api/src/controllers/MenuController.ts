import { Request, Response } from "express";

import MenuService from "../Services/MenuService";

class MenuController {
  public async getByDate(req: Request, res: Response) {
    try {
      const menu = await MenuService.getByDate(req.params.date);
      res.send(menu);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async createMenuForToday(req: Request, res: Response) {
    try {
      const menu = await MenuService.createMenuForToday();
      res.send(menu);
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send("You didn't provide all necessary parameters for menu item!");
    }
  }

  public async addMenuItemToCurrentMenu(req: Request, res: Response) {
    try {
      const { menuId } = req.params;
      await MenuService.addMenuItem(menuId, req.body);
      res.send(req.body);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async delete(req: Request, res: Response): Promise<any> {
    try {
      const { menuId, menuItemIndex } = req.params;
      await MenuService.delete(menuId, parseInt(menuItemIndex));
      res.send("Item deleted");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

export default new MenuController();
