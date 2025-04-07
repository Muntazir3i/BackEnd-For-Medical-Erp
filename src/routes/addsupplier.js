import { Router } from "express";
import { getAllSuppliers,addSupplier } from "../controllers/addsupplierController.js";

const router = Router();


router.route('/all-supplier').get(getAllSuppliers);
router.route('/add-supplier').post(addSupplier);



export default router
