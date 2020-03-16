import { Response, Request } from "express";
import WeeklyReceiptService from "../Services/WeeklyReceiptService";

class WeeklyReceiptController {
    public async getByUserId(req: Request, res: Response): Promise<any> {
        try {
            const { userId } = req.params;
            const weeklyReceipt = await WeeklyReceiptService.getByUserId(
                userId
            );
        } catch (error) {
            res.status(400).send({ error });
        }
    }

    public async getByUserIdAndWeek(req: Request, res: Response): Promise<any> {
        try {
            const { userId } = req.params;
            const { week } = req.params;
            const weeklyReceipt = await WeeklyReceiptService.getByUserIdAndWeek(
                userId
            );
        } catch (error) {
            res.status(400).send({ error });
        }
    }

    public async add(req: Request, res: Response): Promise<any> {
        try {
            const weeklyReceipt = await WeeklyReceiptService.add(req.body);
        } catch (error) {
            res.status(400).send({ error });
        }
    }

    public async delete(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

    public async update(req: Request, res: Response): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

export default new WeeklyReceiptController();
