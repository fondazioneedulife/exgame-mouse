import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({path: path.resolve(__dirname, '../.env')});

interface IConfig {
    HOST: string;
    PORT: string;
    DB_URL: string;
}

const env = process.env;

const getConfig = (): IConfig => {
    const config = {
        HOST: env['APP_HOST'] || 'localhost',
        PORT: env['APP_PORT'] || '3000',
        DB_URL: env['MONGODB_URI'] || 'mongodb://localhost:27017/myapp'
    }

    if (!config) {
        throw new Error('FAI SCHIFO, NON SAI CONFIGURARE, SCHIFOSO DI MERDA');
    }

    return config;
}

export const config = getConfig();