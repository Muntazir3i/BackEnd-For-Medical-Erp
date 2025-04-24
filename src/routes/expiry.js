import { Router } from "express";
import {getExpiry,addExpiry,findExpiry} from '../controllers/expiryController.js'

const router = Router();


router.route('/all-expiry').get(getExpiry);


router.route('/add-expiry').post(addExpiry)

router.route('/find-exp/:name').post(findExpiry)




export default router