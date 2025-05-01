import express from 'express';
import { addPayment } from '../controllers/paymentControllerSql.js';

const router = express.Router();

router.post('/payments', (req, res) => {
  try {
    const result = addPayment(req.body);
    res.json(result);
  } catch (error) {
    console.error('Error saving payment:', error);
    res.status(500).json({ error: 'Failed to save payment' });
  }
});

export default router;