import { fetchAllData } from '../db/billPayment.js';

export async function getAllRecords(req, res) {
  try {
    const { name } = req.body; // Extract name from the request body

    if (!name) {
      return res.status(400).json({ error: 'Supplier name is required' });
    }

    const fetchData = await fetchAllData(); // Fetch bills and payments from the database

    // Ensure the fetched data has the expected structure
    const bills = Array.isArray(fetchData.bills) ? fetchData.bills : [];
    const payments = Array.isArray(fetchData.payments) ? fetchData.payments : [];

    // Combine and filter records
    const allInOne = [...bills, ...payments];
    const filteredRecords = allInOne.filter((data) => data.supplierName === name);

    // Respond with the filtered records
    return res.status(200).json(filteredRecords);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
}