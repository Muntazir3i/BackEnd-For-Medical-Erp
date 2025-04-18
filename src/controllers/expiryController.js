import {readFileExpiry, writeFileExpity} from '../models/expiryModel.js'


//get all expiry

export const getExpiry = async(req,resp)=>{
    const expiry = await readFileExpiry();
    return resp.status(200).json(expiry)
}

// add new expity

export const addExpiry = async(req,resp)=>{
    const allExpiry = await readFileExpiry()

    //add new bill
    // const today = new Date().toISOString().split('T')[0];
    const newExpiry = req.body;
    allExpiry.push(newExpiry);
    await writeFileExpity(allExpiry);
    return resp.status(200).json(newExpiry)
}