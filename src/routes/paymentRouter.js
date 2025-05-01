import express from 'express';
import { addPayment,fetchAllPayments,fetchPaymentsByDate } from '../controllers/paymentControllerSql.js';

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

router.get('/payments/date/:date', (req, res) => {
  try {
    const date = req.params.date; // Get the date from the route parameter
    const payments = fetchPaymentsByDate(date);
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payments by date:', error);
    res.status(500).json({ error: 'Failed to fetch payments by date' });
  }
});

export default router;