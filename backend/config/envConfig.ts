import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Ottieni il percorso della directory corrente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carica le variabili d'ambiente dal file .env
// il metodo config() legge il file .env e lo aggiunge a process.env
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

interface IConfig {
    PORT: string;
    HOST: string;
    DB_URL: string;
}

// Funzione che valida e restituisce le variabili d'ambiente
const getConfig = (): IConfig => {
    const config = {
        HOST: process.env["APP_HOST"] || 'localhost',
        PORT: process.env["APP_PORT"] || '3000',
        DB_URL: process.env["MONGODB_URI"] || 'mongodb://localhost:27017/test',
    };

    if (!config.DB_URL) {
        throw new Error("Missing DB_URL in environment variables");
    }

    if (!config.HOST) {
        throw new Error("Missing APP_HOST in environment variables");
    }

    return config;

};

// Esporta la configurazione
export const config = getConfig();