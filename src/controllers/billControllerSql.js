import db from '../db/billPayment.js'

function addBill(billData) {
  const {
    id, invoice, date, supplierName, supplierDrugLn, supplierContact,
    totalAmount, totalGst, totalDiscount, total, products
  } = billData;

  const insertBill = db.prepare(`
    INSERT INTO bills (id, invoice, date, supplierName, supplierDrugLn, supplierContact, totalAmount, totalGst, totalDiscount, total)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertProduct = db.prepare(`
    INSERT INTO bill_products (id, billId, name, batchNumber, expiryDate, stock, unitPrice, mrp, discount, gstPercentage, supplier, category)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const transaction = db.transaction(() => {
    insertBill.run(id, invoice, date, supplierName, supplierDrugLn, supplierContact, totalAmount, totalGst, totalDiscount, total);
    for (const product of products) {
      insertProduct.run(
        product.id, id, product.name, product.batchNumber, product.expiryDate,
        product.stock, product.unitPrice, product.mrp, product.discount,
        product.gstPercentage, product.supplier, product.category
      );
    }
  });

  transaction();

  return { message: 'Bill saved successfully', billId: id };
}

export { addBill };