import { Router } from "express";
import { getMedicines, addMedicine, uptMedicine, delMedicine, decreaseStock, increaseStock,lowStock,outOfStock } from "../controllers/medicineController.js";
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

//increase stock 
router.route('/inc-stock/:id').put(increaseStock)

//low stock 
router.route('/low-stock').get(lowStock)

//out of stock
router.route('/out-of-stock').get(outOfStock)








export default router

