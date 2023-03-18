import { PhoneDetail } from '../models/PhonesDetails';

export const getOne = (phoneId: string) => PhoneDetail.findByPk(phoneId);
