import mongoose from "mongoose";

interface IUser {
  _id: string;
  first_name: string;
  last_name: String;
  email: string;
  password: string;
  image: string;
  created_at: Date;
  updated_at: Date;
  role: "user" | "teacher" | "admin";
  data: any;
}

const userSchema = new mongoose.Schema<IUser>({
  _id: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  role: { type: String, enum: ["user", "teacher", "admin"], default: "user" },
  data: { type: mongoose.Schema.Types.Mixed, required: false },
});

export const userModel = mongoose.model<IUser>("User", userSchema);
