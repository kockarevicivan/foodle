import { Request, Response } from "express";

class MenuItemController {
  public async delete(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async update(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async updateMenuItem(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async addMenuItemForCurrentWeek(
    req: Request,
    res: Response
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async getMenuItemsForWeek(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

export default new MenuItemController();
