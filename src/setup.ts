import { dbInit } from './utils/initDB';
import { Phone } from './models/Phone';

(async () => {
  dbInit();

  try {
    await Phone.sync({ alter: true });
  } catch (error: any) {
    console.log(error.message);
  }

  console.log('DB synced!');
})();
