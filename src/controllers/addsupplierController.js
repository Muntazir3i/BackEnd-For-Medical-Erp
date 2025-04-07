import { readFile, writeFile } from "../models/addSupplierModel.js";


// get all supplier

export const getAllSuppliers  = async(req,resp)=>{
    const suppliers = await readFile();
    return resp.status(200).json(suppliers)

}

// add new supplier

export const addSupplier = async(req,resp)=>{
    const suppliers = await readFile();

    //add new bill
    const newSupplier = { ...req.body};
    suppliers.push(newSupplier);
    await writeFile(suppliers);
    return resp.status(200).json(newSupplier)
}