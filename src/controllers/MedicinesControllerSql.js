import db from "../db/billPayment.js";

export function fetchAllMedicines() {
    const query = db.prepare(`
      SELECT * FROM bills_products
    `);
  
    return query.all(); // Fetches all rows from the bills_products table
  }