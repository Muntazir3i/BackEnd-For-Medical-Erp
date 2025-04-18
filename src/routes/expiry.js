import { Router } from "express";
import {getExpiry,addExpiry} from '../controllers/expiryController.js'

const router = Router();


router.route('/all-expiry').get(getExpiry);


router.route('add-expiry').post(addExpiry)




export default router