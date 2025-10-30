import { config } from "../config/config.js";
import mongoose from "mongoose";

mongoose.connect(config.DB_URL);


