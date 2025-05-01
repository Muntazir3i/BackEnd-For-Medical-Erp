import db from '../db.js';

function addPayment(payment) {
  const insert = db.prepare(`
    INSERT INTO payments (id, date, invoice, supplierName, drugLicenseNumber, total)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  insert.run(
    payment.id,
    payment.date,
    payment.invoice,
    payment.supplierName,
    payment.drugLicenseNumber,
    payment.total
  );

  return { message: 'Payment recorded', paymentId: payment.id };
}

export { addPayment };