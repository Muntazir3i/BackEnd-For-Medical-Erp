import Database from 'better-sqlite3';

const db = new Database('billsNpayment.db'); // Will create if doesn't exist

db.exec('PRAGMA foreign_keys = ON');

export default db;