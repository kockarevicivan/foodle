import { Response, Request } from "express";
import UserService from "../Services/UserService";

class UserController {
  public async add(req: Request, res: Response) {
    try {
      const user = await UserService.add(req.body);
      res.send(user);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  public async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAll();
      res.send(users);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);
      res.send(user);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.update(id, req.body);
      res.send(user);
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.delete(id);
      res.send(user);
    } catch (error) {
      res.status(400).send({ error });
    }
  }
}

export default new UserController();
