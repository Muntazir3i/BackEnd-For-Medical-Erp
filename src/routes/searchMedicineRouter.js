import express from 'express';
import { fetchSearchMed } from '../controllers/medNameSearch.js';

const router = express.Router();

router.get('/medicines/search/:name',(req,resp)=>{
    try {
        const name = req.params.name;
        const medicines = fetchSearchMed(medName);
        resp.json(medicines);
    } catch (error) {
        console.log('Error Fetching Searched Medicine:' ,error);
        resp.status(500).json({error:'Failed To Fetch Searched Medicine'});
    }
});

export default router