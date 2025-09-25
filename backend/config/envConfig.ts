import path from 'path';
import dotenv from 'dotenv'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({path: path.resolve(__dirname, "../.env")})


interface IConfig{
    PORT: string,
    HOST: string,
    DB_URL: string

}

const getConfig = (): IConfig => {
    const config = {
        HOST: process.env['APP_HOST'],
        PORT: process.env['APP_PORT'],
        DB_URL: process.env['MONGODB_URI']
    };

    if(!config.HOST) {
        throw new Error("Chiave host non trovata")
    }
    if(!config.PORT) {
        throw new Error("Chiave port non trovata")
    }
    if(!config.DB_URL) {
        throw new Error("Chiave DB_URL non trovata")
    }

    return config;
}

export const config = getConfig();