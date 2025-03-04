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
export const uptMedicine = async (req,resp)=>{
    const {id} = req.params
    const {name} = req.body
    const medicine = await readFile();

    //check if exist 
   const index = medicine.findIndex(item => item.id === Number(id));
   if(index === -1){
    return resp.status(404).json({message:"Medicine not found"})
   }
   const existingMedicine = medicine.find(item => item.name === name)
   if(existingMedicine){
       return resp.status(400).json({message:'Medicine Already Exists'})
   }

   medicine[index] = {...medicine[index], ...req.body};
   await writeFile(medicine);
   resp.status(200).json(medicine[index])
}




//delete medicine