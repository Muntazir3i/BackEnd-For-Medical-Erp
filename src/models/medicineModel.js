import fs from 'fs'
import path from 'path'

const filePath = '../data/inventory.json'

// Read file 

export let readFile = async ()=>{
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data)
    } catch (error) {
        []
    }
}

//write file

export const writeFile = async (data)=>{
    await fs.writeFile(filePath,JSON.stringify(data,null,2))
}