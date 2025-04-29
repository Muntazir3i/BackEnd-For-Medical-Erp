import db from "../db/db.js";

export function addSupplier({ supplierName, phoneNumber, drugLn, supplierBalance }) {
  const stmt = db.prepare(`
    INSERT INTO suppliers (name, contact, email, drugLicenceNo)
    VALUES (?, ?, ?, ?)
  `);
  const info = stmt.run(supplierName, phoneNumber, drugLn, supplierBalance);
  return info.lastInsertRowid;
}

// Function to fetch all suppliers
export function getAllSuppliers() {
    const stmt = db.prepare('SELECT * FROM suppliers');
    return stmt.all(); // Returns all rows from the suppliers table
  }


//This code defines a function named addSupplier that is responsible for adding a new supplier to the suppliers table in a SQLite database.