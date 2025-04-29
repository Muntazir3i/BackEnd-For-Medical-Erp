import express from 'express';
import { addSupplier } from '../controllers/supplierController.js';


const router = express.Router();

router.post('/suppliers', (req, res) => {
  const { supplierName, phoneNumber, drugLn, supplierBalance } = req.body;

  if (!supplierName) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const id = addSupplier({ supplierName, phoneNumber, drugLn, supplierBalance });
    res.status(201).json({ message: 'Supplier added', supplierId: id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;