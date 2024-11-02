// src/app.ts
import express, { Application } from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user.route";
// src/app.ts (bổ sung phần này vào đầu file)
import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/mydb";

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB", error));

dotenv.config();

const app: Application = express();
app.use(express.json());

// Định nghĩa route cho user
app.use("/api/users", userRouter);

export default app;
