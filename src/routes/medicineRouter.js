import express from 'express';
import {fetchAllMedicines} from '../controllers/MedicinesControllerSql'

const router = express.Router();

router.get('/medicines', (req, res) => {
    try {
      const payments = fetchAllMedicines();
      res.json(payments);
    } catch (error) {
      console.error('Error fetching payments:', error);
      res.status(500).json({ error: 'Failed to fetch payments' });
    }
  });