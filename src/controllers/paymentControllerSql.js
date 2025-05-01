import db from '../db/billPayment.js';

function addPayment(payment) {
  const insert = db.prepare(`
    INSERT INTO payments (id, date, invoice, supplierName, drugLicenseNumber, total,type)
    VALUES (?, ?, ?, ?, ?, ?,?)
  `);

  insert.run(
    payment.id,
    payment.date,
    payment.invoice,
    payment.supplierName,
    payment.drugLicenseNumber,
    payment.total,
    payment.type,
  );

  return { message: 'Payment recorded', paymentId: payment.id };
}

function fetchAllPayments() {
  const query = db.prepare(`
    SELECT * FROM payments
  `);

  return query.all(); // Fetches all rows from the payments table
}

// Function to fetch payments by date
function fetchPaymentsByDate(date) {
  const query = db.prepare(`
    SELECT * FROM payments WHERE date = ?
  `);

  return query.all(date); // Fetches payments where the date matches
}


export { addPayment,fetchAllPayments,fetchPaymentsByDate };