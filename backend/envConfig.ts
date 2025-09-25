import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
//carica le variabili d'ambiente del file .env
//il metodo .config() legge il file .env e le aggiunge a process.env
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.resolve(__filename)
dotenv.config({path: path.resolve(__dirname, "../.env")});

//Funzione che valida e restituisce le variabili d'ambiente 
const getConfig=() =>{
    const config={}
    return config;
};

//esporta la configurazione per un facilke accesso da qualsiasi parte dell'applicazione
export const config=getConfig();