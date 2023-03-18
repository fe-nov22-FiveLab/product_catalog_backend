import express from 'express';
import * as phoneController from '../controllers/phoneInfo';

export const router = express.Router();

router.get('/:phoneId', phoneController.getPhoneDetails);
