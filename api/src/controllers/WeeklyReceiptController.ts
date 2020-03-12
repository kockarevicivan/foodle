import { Response, Request } from "express";

class WeeklyReceiptController {
  public async getByUserId(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public async getByUserIdAndWeek(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public async add(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public async delete(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }

  public async update(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

export default new WeeklyReceiptController();
