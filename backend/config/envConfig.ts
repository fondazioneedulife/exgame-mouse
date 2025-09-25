
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

//Carica le variabili d'ambiente dei file .env
//Il metodo .config() legge il file .env e le aggiunge a precess.env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });



interface IConfig {
    PORT: string;
    HOST: string;
    DB_URL: string;
}


//Funzione che cvalida e restituisce le variabili d'ambiente
const getCongif = (): IConfig => {
    const config = {
        HOST: process.env["APP_HOST"], // || "localhost",
        PORT: process.env["APP_PORT"] || "3000",
        DB_URL: process.env["MONGODB_URI"] || "mongodb://localhost:27017/mydatabase",
    };

    //validazione (per esempio: se manca una variabile, lancio un errore)
    
        // if (!config.HOST || !config.PORT || !config.DB_URL) {
        //     throw new Error("Alcune variabili d'ambiente non sono state definite nel file .env");
        //     }

        if (!config.DB_URL) {
            throw new Error("DB_URL non è definito nella variabile d'ambiente.")
        }
        if (!config.PORT) {
            throw new Error("PORT non è definito nella variabile d'ambiente.")
        }
        if (!config.HOST) {
            throw new Error("HOST non è definito nella variabile d'ambiente.")
        }

    return config;
};

//Esporta la configurazione per un faciel accesso da qualsiasi parte dell'app
export const config = getCongif();