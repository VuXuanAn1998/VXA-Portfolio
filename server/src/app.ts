
import express, { Application } from "express";
const cors = require('cors');
import { DUMMY_USER } from "./mockdata";


const app: Application = express();
app.use(express.json());
app.use(cors());
app.get('/details-user', (req, res) => {
  res.send(DUMMY_USER);
});

export default app;
