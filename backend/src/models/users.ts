import mongooose from "mongoose";

interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    image?: string;
    created_at: Date;
    updated_at: Date;
    role: "student" | "teacher" | "admin";
    data: string;
}

const userSchema = new mongooose.Schema<IUser>({
    id: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    role: { type: String, enum: ["student", "teacher", "admin"], required: true },
    data: { type: mongooose.Schema.Types.Mixed, required: true },
});

const userModel = mongooose.model<IUser>("User", userSchema);
