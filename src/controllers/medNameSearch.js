import db from "../db/billPayment.js";

export function fetchSearchMed(name) {
    const query = db.prepare(`
                SELECT *
    FROM bill_products
    WHERE name LIKE ?
    ORDER BY id DESC
    LIMIT 3;
            `);
    return query.all(`${name}%`);        
}
