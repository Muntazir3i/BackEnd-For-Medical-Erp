import fs from 'fs/promises'
import path from 'path'

const filePath = path.resolve('src/data/purchases.json');

// Read file 

export let readFilePayment = async ()=>{
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data) || []
    } catch (error) {
        return []
    }
}

//write file

export const writeFilePayment = async (data) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing file:', error);
    }
};