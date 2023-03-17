import express from 'express';
import cors from 'cors';
import { router as phonesRouter } from './routes/phones';
import { dbInit } from './utils/initDB';

const app = express();

dbInit();

app.use(cors());

app.get('/faq', (req, res) => {
  res.send(`
      <h1>Hello there from Five Lab &#128526;</h1>
      <p>Check endpoint
        <a href="https://product-catalog-api-sc0v.onrender.com/phones">
          /phones
        </a>
      </p>
      `);
});
app.use('/phones', phonesRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
