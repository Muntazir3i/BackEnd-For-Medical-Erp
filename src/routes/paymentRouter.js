import express from 'express';
import { addPayment,fetchAllPayments } from '../controllers/paymentControllerSql.js';

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

router.get('/payments', (req, res) => {
  try {
    const payments = fetchAllPayments();
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
});

export default router;