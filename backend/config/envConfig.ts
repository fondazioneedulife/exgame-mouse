import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

dotenv.config({path: path.resolve(__dirname, "../.env")})
const getEnvVariables =() => {

    const keys = {
        APP_HOST: process.env['APP_HOST'],
        APP_PORT: process.env['APP_PORT'],
        MONGODB_URL: process.env['MONGODB_URL'] 
    }


    if (!keys.APP_HOST || !keys.APP_PORT || !keys.MONGODB_URL) { 
        throw new Error("Manca una delle chiavi");  
    }
    
    return keys;
}




export const config = getEnvVariables();