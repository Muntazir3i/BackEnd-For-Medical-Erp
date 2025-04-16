import { Router } from "express";
import { getPurchase, addPurchase,findTransactions,findDayPayment } from "../controllers/purchaseController.js";

const router = Router();

router.route('/all-purchase').get(getPurchase);


router.route('/add-purchase').post(addPurchase)

router.route('/find-trans/:name').post(findTransactions)

router.route('/find-day-payment/:date').post(findDayPayment)


export default router