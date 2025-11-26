import mongoose from "mongoose";
import dotenv from "dotenv";

// Carica variabili d'ambiente da .env (se presenti)
dotenv.config();

// Importa i modelli Mongoose — adatta i percorsi se nel tuo progetto sono diversi
import UserModel from "../models/users";
import ExamModel from "../models/exams";
import SubscriptionModel from "../models/subscriptions";

// URL di connessione (usa MONGO_URI nel .env oppure fallback)
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:...."; //qui metto il collegamnto al mio database

async function connect() {
  await mongoose.connect(MONGO_URI);
}

async function cleanCollections() {
  console.log("Pulizia iniziata: rimuovo record esistenti dalle collezioni...");
  await UserModel.deleteMany({});
  await ExamModel.deleteMany({});
  await SubscriptionModel.deleteMany({});
  console.log("Pulizia completata.");
}

async function seedData() {
  console.log("Generazione dati di seed...");

  // 1) Crea un set di utenti finti (es. 1 user)
  const usersToCreate = [
    {
      _id: new mongoose.Types.ObjectId().toHexString(),
      name: "Giacomo Rossi",
      email: "mario.rossi@example.com",
      role: "student",
      createdAt: new Date(),
    },
  ];

  const createdUsers = await UserModel.insertMany(usersToCreate);
  console.log(`Utenti creati: ${createdUsers.length}`);

  // 2) Crea un set di esami (es. 5 exam)
  const examsToCreate = Array.from({ length: 5 }).map((_, i) => ({
    _id: new mongoose.Types.ObjectId().toHexString(),
    title: `Esame Demo ${i + 1}`,
    description: `Descrizione dell'esame demo ${i + 1}`,
    date: new Date(Date.now() + (i + 1) * 86400000), // date future staggered
    createdAt: new Date(),
  }));

  const createdExams = await ExamModel.insertMany(examsToCreate);
  console.log(`Esami creati: ${createdExams.length}`);

  // 3) Crea iscrizioni (Subscription) usando ID di utenti ed esami
  const userId = createdUsers[0]._id instanceof mongoose.Types.ObjectId ? createdUsers[0]._id.toString(): createdUsers[0]._id;


  const subscriptionsToCreate = createdExams.slice(0, 3).map((exam, idx) => ({
    _id: new mongoose.Types.ObjectId().toHexString(),
    student_id: userId,
    exam_id: exam._id instanceof mongoose.Types.ObjectId ? exam._id.toHexString() : exam._id,
    questions: [
      {
        question_id: `q-${idx + 1}`,
        responses: [{ answer_id: `a-${idx + 1}-1` }],
      },
    ],
    createdAt: new Date(),
  }));

  const createdSubscriptions = await SubscriptionModel.insertMany(subscriptionsToCreate);
  console.log(`Iscrizioni create: ${createdSubscriptions.length}`);

  console.log("Dati di seed generati correttamente.");
}

async function seed() {
  try {
    console.log("Connessione al DB in corso...");
    await connect();
    console.log("Connesso a MongoDB.");

    await cleanCollections();

    await seedData();

    console.log("Seed completato con successo.");
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("Errore durante il seed:", err);
    try {
      await mongoose.disconnect();
    } catch (e) {

    }
    process.exit(1);
  }
}

// Esegui lo script se eseguito direttamente
if (require.main === module) {
  seed();
}

export default seed;
