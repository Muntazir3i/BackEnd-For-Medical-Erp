import { Router } from "express";
import { getPurchase, addPurchase } from "../controllers/purchaseController.js";

const router = Router();

router.route('/all-purchase').get(getPurchase);


router.route('/add-purchase').post(addPurchase)


export default router