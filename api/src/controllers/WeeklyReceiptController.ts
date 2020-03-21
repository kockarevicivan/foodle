import { Response, Request } from "express";
import WeeklyReceiptService from "../Services/WeeklyReceiptService";

class WeeklyReceiptController {
  public async add(req: Request, res: Response): Promise<any> {
    try {
      const date = new Date();
      const weeklyReceipt = await WeeklyReceiptService.add(req.body, date);
      res.send(weeklyReceipt);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  public async getByUserId(req: Request, res: Response): Promise<any> {
    try {
      const { userId } = req.params;
      const weeklyReceipt = await WeeklyReceiptService.getByUserId(userId);
      res.send(weeklyReceipt);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  public async getByUserIdAndWeek(req: Request, res: Response): Promise<any> {
    try {
      const { userId, week, year } = req.params;     

      const weeklyReceipt = await WeeklyReceiptService.getByUserIdAndWeek(
        userId,
        [year, week]
      );

      res.send(weeklyReceipt);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  public async update(req: Request, res: Response): Promise<any> {
    try {
      const { receiptId } = req.params;
      const weeklyReceipt = await WeeklyReceiptService.update(
        receiptId,
        req.body
      );
      res.send(weeklyReceipt);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { receiptId } = req.params;
      const weeklyReceipt = await WeeklyReceiptService.delete(receiptId);
      res.send(weeklyReceipt);
    } catch (error) {
      res.status(400).send({ error });
    }
  }
}
export default new WeeklyReceiptController();
