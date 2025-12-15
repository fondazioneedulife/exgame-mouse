import mongoose from "mongoose";

export interface Iuser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image: string;
  role: "user" | "teacher" | "admin";
  data: any;
}

const userSchema = new mongoose.Schema<Iuser>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, required: false },
  role: { type: String, enum: ["user", "teacher", "admin"], default: "user" },
  data: { type: mongoose.Schema.Types.Mixed, required: false },
});

const userModel = mongoose.model<Iuser>("User", userSchema);

export default userModel;
