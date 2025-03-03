import express from 'express'
import medicineRouter from './routes/medicine.js'

const app = express();
const PORT = 8000;

//middleware to parse JSON request body
app.use(express.json())


//routes

app.use('/api/medicines',medicineRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})