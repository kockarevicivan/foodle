import { Response, Request } from "express";
import UserService from "../Services/UserService";

import User from "../models/User";
class UserController {
    public async getAll(req: Request, res: Response) {
        try {
            res.send(await UserService.getAll());
        } catch (err) {
            res.status(400).send({ error: err });
        }
    }

    public async add(req: Request, res: Response) {
        try {
            res.send(await UserService.add(req.body));
        } catch (err) {
            res.status(400).send({ error: err });
        }
    }

    public async getById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            res.send(await UserService.getById(id));
        } catch (err) {
            res.status(400).send({ error: err });
        }
    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const updateOps: any = {};

        for (const key of Object.keys(req.body)) {
            updateOps[key] = req.body[key];
        }
        res.send(await UserService.update(id, updateOps));
    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;
        res.send(await UserService.delete(id));
    }
}

export default new UserController();
