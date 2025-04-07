import { Router } from "express";
import { getBills,addBill } from "../controllers/billingController.js";

const router = Router();


// get all bills
router.route('/all-bills').get(getBills);

//add new medicine
router.route('/add-bills').post(addBill);


export default router