import { Response, Request } from "express";

class UserOrderController {
  public async delete(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async update(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async add(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async getByUserAndDate(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async getAllByDate(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

export default new UserOrderController();
