import { readFileBill, writeFileBill } from "../models/billingModel.js";

//get all bills

export const getBills = async(req,resp)=>{
    const bills = await readFileBill();
    return resp.status(200).json(bills)
}


// add new bill

export const addBill = async(req,resp)=>{
    const bills = await readFileBill();

    //add new bill
    const today = new Date().toISOString().split('T')[0];
    const newBill = {id:Date.now(), date:today, ...req.body};
    bills.push(newBill);
    await writeFileBill(bills);
    return resp.status(200).json(newBill)
}