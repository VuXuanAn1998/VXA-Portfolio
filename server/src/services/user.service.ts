import { Router } from "express";
import { getData } from "../controllers/user.controller";

const router = Router();

router.get("/", getData);

export default router;
