import express from 'express';
import cors from 'cors';
import path from 'path';
import { router as phonesRouter } from './routes/phones';
import { router as phoneRouter } from './routes/phoneInfo';
import { router as categoriesRouter } from './routes/categories';
import { dbInit } from './utils/initDB';

const app = express();
const port = 5000;

dbInit();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/phones', phonesRouter);
app.use('/phoneInfo', phoneRouter);
app.use('/categories', categoriesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
