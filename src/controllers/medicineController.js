import { readFile, writeFile } from "../models/medicineModel.js";


// get all medicine
export const getMedicines = async(req,resp)=>{
    const medicine = await readFile();
    return resp.status(200).json(medicine)
}

// add new medicine

export const addMedicine = async(req,resp)=>{
    const {name} = req.body
    const medicine = await readFile();

    //check if already exist 
    const existingMedicine = medicine.find(item => item.name === name)
    if(existingMedicine){
        return resp.status(400).json({message:'Medicine Already Exists'})
    }

    //add new medicine
    const newMedicine = {id:Date.now(), ...req.body};
    medicine.push(newMedicine);
    await writeFile(medicine);
    return resp.status(200).json(newMedicine)
}


//update medicine
export const removeMedicine = async (req,resp)=>{
    const {id} = req.params
    const medicine = await readFile();

    //check if exist 
    const existingMedicine = medicine.find(item => item.id === id)
    if(!existingMedicine){
        return resp.status(400).json({message:'Cannot update, no item found'})
    }
    
}




//delete medicine