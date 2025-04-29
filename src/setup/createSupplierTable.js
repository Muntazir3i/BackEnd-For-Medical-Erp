import db from "../db/db.js";

// Create suppliers table if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS suppliers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    supplierName TEXT NOT NULL,
    phoneNumber TEXT,
    drugLn TEXT,
    supplierBalance TEXT
  )
`).run();

console.log('Tables created (if not exist)');

// This code sets up a SQLite database table for storing information about suppliers.