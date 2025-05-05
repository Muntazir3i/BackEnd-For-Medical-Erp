import Database from 'better-sqlite3';

const db = new Database('billsNpayment.db'); // Will create if doesn't exist

// Function to fetch all bills and payments
export function fetchAllData() {
    const billsQuery = db.prepare('SELECT * FROM bills');
    const paymentsQuery = db.prepare('SELECT * FROM payments');
  
    const bills = billsQuery.all(); // Fetch all bills
    const payments = paymentsQuery.all(); // Fetch all payments
  
    return {bills, payments };
  }

  export function fetchDataBySupplier(supplierName) {
    const billsQuery = db.prepare('SELECT * FROM bills WHERE supplierName = ?');
    const paymentsQuery = db.prepare('SELECT * FROM payments WHERE supplierName = ?');
  
    const bills = billsQuery.all(supplierName);
    const payments = paymentsQuery.all(supplierName);
  
    return { bills, payments };
  }

db.exec('PRAGMA foreign_keys = ON');

export default db;