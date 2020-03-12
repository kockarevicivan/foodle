import { Request, Response } from "express";

class InvoiceController {
  public async send(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async upload(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  public async getById(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

export default new InvoiceController();
