import mongoose, { Document, Schema } from 'mongoose';

interface IAnswer {
  private _id(_id: any): string;
  answer_id: string;
  text: string;
  is_correct: boolean;
}

interface IQuestion {
  _id(_id: any): string;
  question_id: string;
  text: string;
  type: string;
  answers: IAnswer[];
}

export interface IExamsDoc extends Document {
  name: string;
  schedule_date: Date;
  max_time: number;
  created_by: mongoose.Types.ObjectId; // reference to User
  questions: IQuestion[];
  createdAt?: Date;
  updatedAt?: Date;
}

const AnswerSchema = new Schema<IAnswer>({
  answer_id: { type: String, required: true },
  text: { type: String, required: true },
  is_correct: { type: Boolean, required: true },
}, { _id: false });

const QuestionSchema = new Schema<IQuestion>({
  question_id: { type: String, required: true },
  text: { type: String, required: true },
  type: { type: String, required: true },
  answers: { type: [AnswerSchema], required: true },
}, { _id: false });

const examsSchema: Schema = new Schema<IExamsDoc>({
  name: { type: String, required: true },
  // store schedule_date as Date
  schedule_date: { type: Date, required: true },
  max_time: { type: Number, required: true },
  // created_by is a reference to the User model
  created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  questions: { type: [QuestionSchema], default: [] },
}, {
  timestamps: true, // replaces manual created_at / updated_at
});

// If you still need legacy fields created_at/updated_at (snake_case) you can add virtuals:
// examsSchema.virtual('created_at').get(function(this: IExamsDoc) { return this.createdAt; });
// examsSchema.virtual('updated_at').get(function(this: IExamsDoc) { return this.updatedAt; });

const examsModel = mongoose.model<IExamsDoc>('Exams', examsSchema);
export default examsModel;