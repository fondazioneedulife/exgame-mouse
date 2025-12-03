import mongoose from "mongoose";
import examsModel from "../src/models/exams";
import userModel from "../src/models/users";
import subscriptionModel from "../src/models/subscriptions";

mongoose
  .connect("mongodb://localhost:27017/myapp")
  .then(() => console.log("Connesso a MongoDB"))
  .catch((err) => console.error("Errore di connessione:", err));
