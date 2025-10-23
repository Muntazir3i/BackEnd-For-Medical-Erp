import express from 'express'
import medicineRouter from './routes/medicine.js'
import billingRouter from './routes/bills.js'
import purchaseRouter from './routes/purchase.js'
import paymentRouter from './routes/payments.js'
import expiryRouter from './routes/expiry.js'
import supplierRoutes from './routes/supplierRouter.js'
import billRouterSql from './routes/billRouter.js'
import paymentRouterSql from './routes/paymentRouter.js'
import billPaymentRouterSql from './routes/billPaymentRouter.js'
import allMedicinesRouterSql from './routes/medicineRouter.js'
import './setup/createSupplierTable.js'
import './setup/createBillsPaymnetTable.js'


import cors from 'cors'

const app = express();
const PORT = 8008;

app.use(cors());

//middleware to parse JSON request body
app.use(express.json())


//routes

app.use('/api/medicines',medicineRouter)
app.use('/api/bills',billingRouter)
app.use('/api/expiry',expiryRouter)
app.use('/api/supplier',supplierRoutes)
app.use('/api/sqlbills', billRouterSql);
app.use('/api/sqlpayment', paymentRouterSql);
app.use('/api/sqlbillpayment',billPaymentRouterSql)
app.use('/api/sqlmedicines',allMedicinesRouterSql)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})