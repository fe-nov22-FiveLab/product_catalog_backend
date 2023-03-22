import { dbInit } from './utils/initDB';
import { Phone } from './models/Phone';
import { PhoneDetail } from './models/PhonesDetails';
import { Category } from './models/Category';
import { Tablet } from './models/Tablets';

(async () => {
  dbInit();

  try {
    await Tablet.sync({ alter: true });
    await Phone.sync({ alter: true });
    await PhoneDetail.sync({ alter: true });
    await Category.sync({ alter: true });
  } catch (error: any) {
    console.log(error.message);
  }

  console.log('DB synced!');
})();
