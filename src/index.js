import express from 'express'
import medicineRouter from './routes/medicine.js'
import billingRouter from './routes/bills.js'
import purchaseRouter from './routes/purchase.js'
import paymentRouter from './routes/payments.js'
import addSupplierRouter from './routes/addsupplier.js'
import expiryRouter from './routes/expiry.js'


import cors from 'cors'

const app = express();
const PORT = 8000;

app.use(cors());

//middleware to parse JSON request body
app.use(express.json())


//routes

app.use('/api/medicines',medicineRouter)
app.use('/api/bills',billingRouter)
app.use('/api/purchase',purchaseRouter)
app.use('/api/payment',paymentRouter)
app.use('/api/addSupplier',addSupplierRouter)
app.use('/api/expiry',expiryRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})