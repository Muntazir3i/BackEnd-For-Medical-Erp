import db from '../db/billPayment.js'

db.exec(`
CREATE TABLE IF NOT EXISTS bills (
  id INTEGER PRIMARY KEY,
  invoice TEXT,
  date TEXT,
  supplierName TEXT,
  supplierDrugLn TEXT,
  supplierContact TEXT,
  totalAmount REAL,
  totalGst REAL,
  totalDiscount REAL,
  total REAL
);

CREATE TABLE IF NOT EXISTS bill_products (
  id INTEGER PRIMARY KEY,
  billId INTEGER,
  name TEXT,
  batchNumber TEXT,
  expiryDate TEXT,
  stock INTEGER,
  unitPrice REAL,
  mrp REAL,
  discount REAL,
  gstPercentage REAL,
  supplier TEXT,
  category TEXT,
  FOREIGN KEY (billId) REFERENCES bills(id)
);

CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY,
  date TEXT,
  invoice TEXT,
  supplierName TEXT,
  drugLicenseNumber TEXT,
  total REAL
);
`);

console.log('✅ Tables created (if not already present)');