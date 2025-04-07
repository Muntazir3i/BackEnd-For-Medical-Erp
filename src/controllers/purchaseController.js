import {readFilePurchase, writeFilePurchase} from '../models/purchaseModel.js'

//get all purchases

export const getPurchase = async(req,resp)=>{
    const bills = await readFilePurchase();
    return resp.status(200).json(bills)
}

// add new bill

export const addPurchase = async(req,resp)=>{
    const purchases = await readFilePurchase()

    //add new bill
    // const today = new Date().toISOString().split('T')[0];
    const newPurchase = req.body;
    purchases.push(newPurchase);
    await writeFilePurchase(purchases);
    return resp.status(200).json(newPurchase)
}