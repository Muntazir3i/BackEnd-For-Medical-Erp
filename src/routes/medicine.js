import { Router } from "express";
import { getMedicines, addMedicine, uptMedicine } from "../controllers/medicineController.js";
const router = Router();



//crud operations

// get all medicine
router.route('/all-medi').get(getMedicines);

//add new medicine
router.route('/add-medi').post(addMedicine);

//update medicine based on id
router.route('/upt-medi/:id').put(uptMedicine)







export default router

