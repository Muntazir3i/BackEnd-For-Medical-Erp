import { Router } from "express";
import { getPurchase, addPurchase,findTransactions } from "../controllers/purchaseController.js";

const router = Router();

router.route('/all-purchase').get(getPurchase);


router.route('/add-purchase').post(addPurchase)

router.route('/find-trans/:name').post(findTransactions)


export default router