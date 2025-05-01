import express from 'express';
import { getAllRecords } from '../controllers/billPaymentController.js';

const router = express.Router();

// Route to fetch all records (bills and payments)
router.get('/all-data', getAllRecords);

export default router;