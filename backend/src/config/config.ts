// src/config.ts
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Carica le variabili d'ambiente dal file .env
// Il metodo .config() legge il file .env e le aggiunge a process.env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Interfaccia per definire la struttura delle variabili d'ambiente
// Questo è opzionale ma utile con TypeScript per avere tipizzazione e autocompletamento
interface IConfig {
  PORT: string;
  HOST: string;
  DB_URL: string;
  FRONTEND_APP: string;
}

// Funzione che valida e restituisce le variabili d'ambiente
const getConfig = (): IConfig => {
  const config = {
    HOST: process.env["APP_HOST"] || "localhost",
    PORT: process.env["APP_PORT"] || "3000",
    DB_URL: process.env["MONGODB_URI"] || "mongodb://localhost:27017/exgame",
    FRONTEND_APP: process.env["FRONTEND_APP"] || "http://localhost:3000",
      JWT_SECRET: process.env.JWT_SECRET as string,
  };

  // Esempio di validazione: lancia un errore se una variabile cruciale non è definita
  if (!config.DB_URL) {
    throw new Error("DB_URL non è definita nelle variabili d'ambiente.");
  }

  if (!config.HOST) {
    throw new Error("HOST non è definita nelle variabili d'ambiente.");
  }

  return config;
};

// Esporta la configurazione per un facile accesso da qualsiasi parte dell'applicazione
export const config = getConfig();
