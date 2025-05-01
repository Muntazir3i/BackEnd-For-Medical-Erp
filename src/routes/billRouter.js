import express from 'express';
import { addBill,fetchBillsWithProducts } from '../controllers/billControllerSql.js';

const router = express.Router();

router.post('/bills', (req, res) => {
  try {
    const result = addBill(req.body);
    res.json(result);
  } catch (error) {
    console.error('Error saving bill:', error);
    res.status(500).json({ error: 'Failed to save bill' });
  }
});

router.get('/bills', (req, res) => {
  try {
    const bills = fetchBillsWithProducts();
    res.json(bills);
  } catch (error) {
    console.error('Error fetching bills:', error);
    res.status(500).json({ error: 'Failed to fetch bills' });
  }
});

export default router;