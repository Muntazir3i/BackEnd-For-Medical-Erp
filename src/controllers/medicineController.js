import { readFile, writeFile } from "../models/medicineModel.js";


// get all medicine
export const getMedicines = async(req,resp)=>{
    const medicine = await readFile();
    return resp.status(200).json(medicine)
}

// add new medicine

// export const addMedicine = async(req,resp)=>{
//     const {name} = req.body
//     const {category} = req.body
//     const medicine = await readFile();

//     //check if already exist 
//     const existingMedicine = medicine.find(item => item.category === category && item.name === name )
//     if(existingMedicine){
//         return resp.status(400).json({message:'Medicine Already Exists'})
//     }

//     //add new medicine
//     const newMedicine = {id:Date.now(), ...req.body};
//     medicine.push(newMedicine);
//     await writeFile(medicine);
//     return resp.status(200).json(newMedicine)
// }

// export const addMedicine = async (req, resp) => {
//     const medicinesToAdd = req.body; // Expecting an array of medicines
//     if (!Array.isArray(medicinesToAdd)) {
//         return resp.status(400).json({ message: 'Invalid data format. Expecting an array of medicines.' });
//     }

//     const storedMedicines = await readFile();

//     // Simply append new medicines without modifying their IDs
//     const updatedMedicineList = [...storedMedicines, ...medicinesToAdd];
//     await writeFile(updatedMedicineList);

//     return resp.status(200).json({ message: 'Medicines added successfully', addedMedicines: medicinesToAdd });
// };

export const addMedicine = async (req, resp) => {
    const medicinesToAdd = req.body;

    if (!Array.isArray(medicinesToAdd)) {
        return resp.status(400).json({ message: 'Invalid data format. Expecting an array of medicines.' });
    }

    let storedMedicines = await readFile();

    // Ensure storedMedicines is an array
    if (!Array.isArray(storedMedicines)) {
        storedMedicines = [];
    }

    // Append new medicines directly as objects (without nesting keys)
    const updatedMedicineList = [...storedMedicines, ...medicinesToAdd];

    await writeFile(updatedMedicineList);

    return resp.status(200).json({ message: 'Medicines added successfully', addedMedicines: medicinesToAdd });
};





//update medicine


export const uptMedicine = async (req, resp) => {
    const { id } = req.params;
    const { name, category } = req.body;
    
    try {
        let medicine = await readFile();

        const index = medicine.findIndex(item => item.id === Number(id));

        if (index === -1) {
            return resp.status(404).json({ message: "Medicine not found." });
        }
        
        // Check if another medicine (not the same ID) has the same name & category
        const existingMedicine = medicine.find(
            item => item.id !== Number(id) &&
                    item.name.toLowerCase() === name.toLowerCase() &&
                    item.category.toLowerCase() === category.toLowerCase()
        );
        
        if (existingMedicine) {
            return resp.status(400).json({ message: "Medicine with the same name and category already exists." });
        }
        
        // Update only provided fields
        medicine[index] = { ...medicine[index], ...req.body };
        
        // Save changes
        await writeFile(medicine);
        return resp.status(200).json(medicine[index]);
        
    } catch (error) {
        console.error("Error updating medicine:", error);
        return resp.status(500).json({ message: "Internal server error" });
    }
};





//delete medicine
export const delMedicine = async (req,resp) => {
    const {id} = req.params
    const medicine = await readFile()

    //find the medi first
    const filteredMedi = medicine.filter(item => item.id !== Number(id))

    //check if exist
    if(medicine.length === filteredMedi.length){
        return resp.status(404).json({message:'Medicine not found'})
    }
    await writeFile(filteredMedi);
    resp.status(200).json({message:'Medicine deleted Successfully'})
}

//decrease the stock when qty is increased in cart







//increase the stock the qty is decreased in cart


