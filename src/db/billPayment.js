import Database from 'better-sqlite3';

const db = new Database('billsNpayment.db'); // Will create if doesn't exist

export default db;