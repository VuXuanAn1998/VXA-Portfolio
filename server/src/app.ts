import express, { Application } from "express";
const cors = require("cors");
import bodyParser from "body-parser";
import dataRoutes from "./routers/user.route";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/data", dataRoutes);

export default app;
