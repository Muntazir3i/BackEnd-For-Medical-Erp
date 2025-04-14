import { Router } from "express";
import { getMedicines, addMedicine, uptMedicine, delMedicine, decreaseStock } from "../controllers/medicineController.js";
const router = Router();



//crud operations

// get all medicine
router.route('/all-medi').get(getMedicines);

//add new medicine
router.route('/add-medi').post(addMedicine);

//update medicine based on id
router.route('/upt-medi/:id').put(uptMedicine)

//deleted medicine based on id 
router.route('/del-medi/:id').delete(delMedicine)

//decrease stock 
router.route('/dec-stock/:id').put(decreaseStock)






export default router

