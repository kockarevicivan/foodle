import { Response, Request } from "express";
import WeeklyReceiptService from "../Services/WeeklyReceiptService";

class WeeklyReceiptController {
  public async add(req: any, res: any) {
    try {
      const today = new Date();
      const weeklyReceipt = await WeeklyReceiptService.add(req.user._id, today);
      res.send(weeklyReceipt);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  public async getByUserId(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const weeklyReceipt = await WeeklyReceiptService.getByUserId(userId);
      res.send(weeklyReceipt);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  public async getByUserIdAndWeek(req: any, res: any) {
    try {
      const { dateTime } = req.params;
      const { _id } = req.user;

      const weeklyReceipt = await WeeklyReceiptService.getByUserIdAndWeek(
        _id,
        dateTime
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
