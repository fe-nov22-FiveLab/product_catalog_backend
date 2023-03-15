import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server finally works');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is finally running at http://localhost:${port}`);
});
