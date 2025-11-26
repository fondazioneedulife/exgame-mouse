import mongoose from "mongoose";
import { exams } from "../mocks/exams";
import { subscriptions } from "../mocks/subscriptions";
import { users } from "../mocks/users";
import examsModel from "../models/exams";
import subscriptionModel from "../models/subscriptions";
import userModel from "../models/users";

async function seed() {
  try {
    await mongoose.connect(
      process.env["MONGODB_URI"] || "mongodb://localhost:27017/db_exgame_mouse",
    );

    console.log("Connected to database.");

    await userModel.deleteMany({});
    await examsModel.deleteMany({});
    await subscriptionModel.deleteMany({});

    await userModel.insertMany(users);
    await examsModel.insertMany(exams);
    await subscriptionModel.insertMany(subscriptions);

    console.log("Database seeded successfully.");
  } catch (err) {
    console.error("Error while seeding:", err);
  } finally {
    await mongoose.connection.close();
    console.log("Connection closed.");
  }
}

seed();
