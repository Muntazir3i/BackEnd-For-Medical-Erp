import { Router } from "express";
import { getMedicines, addMedicine } from "../controllers/medicineController.js";
const router = Router();



//crud operations

router.route('/all-medi').get(getMedicines);
router.route('/add-medi').post(addMedicine);







export default router

