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

//controller for finding Supplier expiry details
export const findExpiry = async (req, resp) => {
    try {
        const { name } = req.params; // Get the supplier name from request parameters
        const decodedName = decodeURIComponent(name);
        const allExpiry = await readFileExpiry(); // Read all expiry

        // Filter expiry for the specific supplier and sort them by date
        const supplierExpiry = allExpiry
            .filter((item) => item.supplierName === decodedName)
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        // Respond with the filtered and sorted transactions
        return resp.status(200).json(supplierExpiry);

    } catch (error) {
        console.error("Error Fetching expiry for Supplier:", error);

        // Respond with an error message and status code 500
        return resp.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};