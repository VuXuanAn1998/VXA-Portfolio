import express, { Request, Response } from 'express';
import { DUMMY_USER } from './mockdata';
import cors from 'cors';
const app = express();
const port = 3001;
app.use(cors({
  origin: 'http://localhost:3000', // Thay đổi URL này theo địa chỉ Front-End của bạn
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Các phương thức HTTP mà bạn muốn cho phép
}));
app.get('/product', (req: Request, res: Response) => {
  res.send(DUMMY_USER);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
