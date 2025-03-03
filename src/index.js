import express from 'express'

const app = express();
const PORT = 8000;

//middleware to parse JSON request body
app.use(express.json())


//routes



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})