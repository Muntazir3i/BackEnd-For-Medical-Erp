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


//controller for finding Supplier Transactions 
export const findTransactions = async (req, resp) => {
    try {
        const { name } = req.params; // Get the supplier name from request parameters
        const decodedName = decodeURIComponent(name);
        const transactions = await readFilePurchase(); // Read all purchase transactions

        // Filter transactions for the specific supplier and sort them by date
        const supplierTransactions = transactions
            .filter((item) => item.supplierName === decodedName)
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        // Respond with the filtered and sorted transactions
        return resp.status(200).json(supplierTransactions);

    } catch (error) {
        console.error("Error Fetching Transactions for Supplier:", error);

        // Respond with an error message and status code 500
        return resp.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};


//contoller for finding  payment based on day

export const findDayPayment = async (req, res) => {
    try {
        const { date } = req.params; // Extract the date from the request parameters
        const decodedDate = decodeURIComponent(date);

        const transactions = await readFilePurchase(); // Read all purchase transactions

        // Filter transactions to find payments for the specific date
        const datePayment = transactions.filter(item =>
            item.type === 'Payment' && item.date === decodedDate
        );

        // Respond with the filtered payments
        return res.status(200).json(datePayment);
    } catch (error) {
        console.error("Error Fetching Payments for Date:", error.message); // Log the error
        // Respond with an error message and status code 500
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

