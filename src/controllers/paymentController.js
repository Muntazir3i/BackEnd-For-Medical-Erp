import {readFilePayment,writeFilePayment} from '../models/paymentModel.js'


//get all payments

export const getPayments = async(req,resp)=>{
    const payments = await readFilePayment();
    return resp.status(200).json(payments)
}

// add new payment

export const addPayment = async(req,resp)=>{
    const payments = await readFilePayment();

    //add new bill
    const newPayment = {...req.body};
    payments.push(newPayment);
    await writeFilePayment(payments);
    return resp.status(200).json(newPayment)
}