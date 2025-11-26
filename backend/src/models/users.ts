import mongoose, { Document, Schema } from 'mongoose';

// Documento Mongoose tipizzato
export interface IUserDoc extends Document {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image?: string;
  role: 'user' | 'teacher' | 'admin';
  data?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

// Schema: utilizza timestamps per createdAt/updatedAt automatici
const userSchema: Schema = new Schema<IUserDoc>(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    image: { type: String, required: false },
    role: { type: String, enum: ['user', 'teacher', 'admin'], default: 'user' },
    data: { type: Schema.Types.Mixed, required: false },
  },
  {
    timestamps: true, // crea createdAt e updatedAt automaticamente
  }
);

// Virtual per ottenere il nome completo se ti serve: user.name
userSchema.virtual('name').get(function (this: IUserDoc) {
  return `${this.first_name} ${this.last_name}`;
});

// (Opzionale) se vuoi poter usare `user.id` come stringa:
// userSchema.virtual('id').get(function (this: IUserDoc) {
//   return this._id.toString();
// });

const userModel = mongoose.model<IUserDoc>('User', userSchema);
export default userModel;