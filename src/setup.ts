import { dbInit } from './utils/initDB';
import { Phone } from './models/Phone';
import { PhoneInfo } from './models/PhoneInfo';
import { Category } from './models/Category';

(async () => {
  dbInit();

  try {
    await Phone.sync({ alter: true });
    await PhoneInfo.sync({ alter: true });
    await Category.sync({ alter: true });
  } catch (error: any) {
    console.log(error.message);
  }

  console.log('DB synced!');
})();
