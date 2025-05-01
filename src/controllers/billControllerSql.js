import db from '../db/billPayment.js'

function addBill(billData) {
  const {
    id, invoice, date, supplierName, supplierDrugLn, supplierContact,
    totalAmount, totalGst, totalDiscount, total,type,products
  } = billData;

  const insertBill = db.prepare(`
    INSERT INTO bills (id, invoice, date, supplierName, supplierDrugLn, supplierContact, totalAmount, totalGst, totalDiscount, total,type)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)
  `);

  const insertProduct = db.prepare(`
    INSERT INTO bill_products (id, billId, name, batchNumber, expiryDate, stock, unitPrice, mrp, discount, gstPercentage, supplier, category)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const transaction = db.transaction(() => {
    insertBill.run(id, invoice, date, supplierName, supplierDrugLn, supplierContact, totalAmount, totalGst, totalDiscount, total,type);
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

function fetchBillsWithProducts() {
  const query = `
    SELECT 
      b.id AS billId,
      b.invoice,
      b.date,
      b.supplierName,
      b.supplierDrugLn,
      b.supplierContact,
      b.totalAmount,
      b.totalGst,
      b.totalDiscount,
      b.total,
      b.type,
      p.id AS productId,
      p.name AS productName,
      p.batchNumber,
      p.expiryDate,
      p.stock,
      p.unitPrice,
      p.mrp,
      p.discount,
      p.gstPercentage,
      p.supplier AS productSupplier,
      p.category AS productCategory
    FROM 
      bills b
    LEFT JOIN 
      bill_products p
    ON 
      b.id = p.billId
  `;

  const rows = db.prepare(query).all();

  // Group the results by billId
  const bills = rows.reduce((acc, row) => {
    const {
      billId, invoice, date, supplierName, supplierDrugLn, supplierContact,
      totalAmount, totalGst, totalDiscount, total,type,
      productId, productName, batchNumber, expiryDate, stock,
      unitPrice, mrp, discount, gstPercentage,
      productSupplier, productCategory
    } = row;

    // Check if the billId already exists in the accumulator
    if (!acc[billId]) {
      acc[billId] = {
        id: billId,
        invoice,
        date,
        supplierName,
        supplierDrugLn,
        supplierContact,
        totalAmount,
        totalGst,
        totalDiscount,
        total,
        type,
        products: [] // Initialize an empty array for products
      };
    }

    // If there's a product associated with the bill, push it to the products array
    if (productId) {
      acc[billId].products.push({
        id: productId,
        name: productName,
        batchNumber,
        expiryDate,
        stock,
        unitPrice,
        mrp,
        discount,
        gstPercentage,
        supplier: productSupplier,
        category: productCategory
      });
    }

    return acc;
  }, {});

  // Convert the object to an array of bills
  return Object.values(bills);
}

export { addBill,fetchBillsWithProducts };