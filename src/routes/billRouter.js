import express from 'express';
import { addBill } from '../controllers/billControllerSql.js';

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

export default router;