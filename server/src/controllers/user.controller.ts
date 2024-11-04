// src/controllers/user.controller.ts
import { Request, Response } from "express";
import { DUMMY_USER } from "../mockdata";

export class UserController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      res.send(DUMMY_USER);
    } catch (error) {
      res.send({ error: error });
    }
  }
}

export default new UserController();
