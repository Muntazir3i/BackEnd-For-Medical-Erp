import { Router } from "express";
import { getPayments,addPayment } from "../controllers/paymentController.js";

const router = Router();


router.route('/all-payments').get(getPayments);
router.route('/add-payment').post(addPayment);



export default router
