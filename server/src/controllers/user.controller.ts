import { Request, Response } from "express";
import dataModel from "../models/user.model";

export const getData = (req: Request, res: Response) => {
  const data = dataModel.getData();
  res.json(data);
};
