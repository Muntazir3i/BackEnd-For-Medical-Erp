import { fetchAllData } from '../db/billPayment.js';

export function getAllRecords(req, res) {
  try {
    const data = fetchAllData(); // Fetch bills and payments from the database
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}